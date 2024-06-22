import { ROUTES_CONFIG } from '~app/config/routes';
import { UrlSchema } from '~schema/url';

/**
 * Matches the current route URL with the application's routes.
 *
 * @param currentRouteUrl - The current route URL.
 * @returns Returns the matched route object if the route URL is valid, otherwise returns false.
 */
export const matchRoute = (currentRouteUrl: string | null) => {
  const validatedUrl = UrlSchema.safeParse(currentRouteUrl);

  if (!validatedUrl.success) {
    return false;
  }

  const url = new URL(validatedUrl.data);

  const matchRouteConfig = ROUTES_CONFIG.find((route) => url.pathname.endsWith(route.path));

  if (!matchRouteConfig) {
    return false;
  }

  return matchRouteConfig;
};
