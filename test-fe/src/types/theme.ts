import { z } from 'zod';

import { ThemeSchema } from '~schema/theme';

/**
 * Represents the inferred type of the `ThemeSchema`.
 */
export type Theme = z.infer<typeof ThemeSchema>;
