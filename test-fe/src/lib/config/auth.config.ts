import bcrypt from 'bcryptjs';
import { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

import { getUserByEmail } from '~data/user';
import { SignInWithEmailSchema } from '~schema/form/sign-in-with-email';

export const authConfig = {
  providers: [
    Google,
    Github,
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = SignInWithEmailSchema.safeParse(credentials);

        if (!validatedFields.success) {
          return null;
        }

        const { email, password } = validatedFields.data;

        const existingUser = await getUserByEmail(email);

        if (!existingUser || !existingUser.email || !existingUser.password) {
          return null;
        }

        const passwordsMatch = await bcrypt.compare(password, existingUser.password);

        if (!passwordsMatch) {
          return null;
        }

        return existingUser;
      },
    }),
  ],
} satisfies NextAuthConfig;
