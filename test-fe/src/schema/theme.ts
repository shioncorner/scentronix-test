import { z } from 'zod';

import { THEME } from '~constants/theme';

/**
 * Defines the schema for the available themes.
 */
export const ThemeSchema = z.nativeEnum(THEME);
