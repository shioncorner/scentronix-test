import { z } from 'zod';

import { LanguageSchema } from '~schema/language';

/**
 * Represents the inferred type of the `LanguageSchema`.
 */
export type Language = z.infer<typeof LanguageSchema>;
