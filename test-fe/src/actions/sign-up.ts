'use server';

import bcrypt from 'bcryptjs';

import { getUserByEmail } from '~data/user';
import { prisma } from '~prisma/client';
import { SignUpWithEmailSchema } from '~schema/form/sign-up-with-email';
import type { APIMessageReturn } from '~types/api';
import type { SignUpWithEmailProps } from '~types/form/sign-up-with-email';

/**
 * This function is used to sign up a new user
 *
 * @param values - The values to sign up with
 * @returns The object with the success or error message
 */
export const signUp = async (values: SignUpWithEmailProps): Promise<APIMessageReturn> => {
  const validatedFields = SignUpWithEmailSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'invalid-credentials' };
  }

  const { email, name, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'email-already-exists' };
  }

  const hashRounds = 10;
  const hashedPassword = await bcrypt.hash(password, hashRounds);

  await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  // TODO: Send verification email

  return { success: 'user-created' };
};
