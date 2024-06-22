import { z } from 'zod';

/**
 * Defines the schema for the sign up form.
 */
export const SignUpWithEmailSchema = z.object({
  name: z.string().min(1, {
    message: 'name-required',
  }),
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
