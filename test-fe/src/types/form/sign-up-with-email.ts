import { z } from 'zod';

import { SignUpWithEmailSchema } from '~schema/form/sign-up-with-email';

/**
 * Represents the inferred type of the `SignUpWithEmailSchema`.
 */
export type SignUpWithEmailProps = z.infer<typeof SignUpWithEmailSchema>;
