import { z } from 'zod';

import { PAGE } from '~constants/page';

/**
 * Defines the schema for the available pages.
 */
export const PageSchema = z.nativeEnum(PAGE);
