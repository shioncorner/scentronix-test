import { z } from 'zod';

import { LANGUAGE } from '~constants/language';

/**
 * Defines the schema for the available params.
 */
export const LocaleParamsSchema = z.object({
  locale: z.nativeEnum(LANGUAGE),
});
