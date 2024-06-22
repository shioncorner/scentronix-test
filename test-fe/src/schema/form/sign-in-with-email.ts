import { z } from 'zod';

/**
 * Defines the schema for the sign in form.
 */
export const SignInWithEmailSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'email-required',
    })
    .email({
      message: 'email-invalid',
    }),
  password: z.string().min(1, {
    message: 'password-required',
  }),
});
