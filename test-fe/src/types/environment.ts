import { z } from 'zod';

import type { EnvironmentSchema } from '~schema/environment';

/**
 * Represents the inferred type of the `EnvironmentSchema`.
 */
export type Environment = z.infer<typeof EnvironmentSchema>;
