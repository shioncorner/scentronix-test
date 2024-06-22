import { z } from 'zod';

import { ENVIRONMENT } from '~constants/environment';

/**
 * Defines the schema for the available environments.
 */
export const EnvironmentSchema = z.nativeEnum(ENVIRONMENT);
