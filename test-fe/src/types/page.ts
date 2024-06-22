import { z } from 'zod';

import { PageSchema } from '~schema/page';

/**
 * Represents the inferred type of the `PageSchema`.
 */
export type Page = z.infer<typeof PageSchema>;

export type MenuType = {
  name: string;
  href: Page;
};
