import type { UserRole } from '@prisma/client';

import type { MetadataRoute } from '~types/metadata';
import type { Page } from '~types/page';

/**
 * THe props for the Route
 */
export type RouteConfigProps = {
  /**
   * The permissions of the route.
   * If auth is undefined, the route is public.
   * If auth is defined and length is 0, the route is only accessible by unauthenticated users.
   * If auth is defined and length is greater than 0, the route can access by the user with the specified role.
   * Admin can access all routes except the ones that are only accessible by unauthenticated users.
   */
  auth?: UserRole[];
  metadata?: MetadataRoute;
  path: Page;
};
