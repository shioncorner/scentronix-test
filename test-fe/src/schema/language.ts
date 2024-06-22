import { z } from 'zod';

import { LANGUAGE } from '~constants/language';

/**
 * Defines the schema for the available languages.
 */
export const LanguageSchema = z.nativeEnum(LANGUAGE);
