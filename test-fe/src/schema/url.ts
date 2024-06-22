import { z } from 'zod';

/**
 * Defines the schema for the url
 */
export const UrlSchema = z.string().min(1).url();
