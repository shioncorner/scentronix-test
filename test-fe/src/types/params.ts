import { z } from 'zod';

import { LocaleParamsSchema } from '~schema/params';

/**
 * Represents the inferred type of the `LocaleParamsSchema`.
 */
export type LocaleParams = z.infer<typeof LocaleParamsSchema>;

/**
 * Represents the props that are injected into a component with the params.
 */
export type WithLocaleParamsProps = {
  params: LocaleParams;
};
