import { PrismaAdapter } from '@auth/prisma-adapter';
import { UserRole } from '@prisma/client';
import NextAuth, { type DefaultSession } from 'next-auth';
import 'next-auth/jwt';

import { PAGE } from '~constants/page';
import { getUserById } from '~data/user';
import { authConfig } from '~lib/config/auth.config';
import { prisma } from '~prisma/client';

/**
 * Extend the NextAuth session and JWT types to include the user role.
 */
declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      role: UserRole;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: UserRole;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    jwt: async ({ token }) => {
      if (!token.sub) {
        return token;
      }

      const existingUser = await getUserById(token.sub);

      if (!existingUser) {
        return token;
      }

      /**
       * Add the user role to the JWT token.
       */
      token.role = existingUser.role;

      return token;
    },
    session: ({ session, token }) => {
      /**
       * Add the user id to the session.
       */
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      /**
       * Add the user role to the session.
       */
      if (token.role && session.user) {
        session.user.role = token.role;
      }

      return session;
    },
  },
  events: {
    linkAccount: async ({ user }) => {
      /**
       * Update the user's emailVerified field when they link an account through OAuth.
       */
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  pages: {
    signIn: PAGE.SIGN_IN,
  },
  session: {
    strategy: 'jwt',
  },
  ...authConfig,
});
