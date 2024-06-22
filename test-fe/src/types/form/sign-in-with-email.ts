import { z } from 'zod';

import { SignInWithEmailSchema } from '~schema/form/sign-in-with-email';

/**
 * Represents the inferred type of the `SignInWithEmailSchema`.
 */
export type SignInWithEmailProps = z.infer<typeof SignInWithEmailSchema>;
