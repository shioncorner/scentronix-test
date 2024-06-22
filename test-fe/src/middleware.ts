import NextAuth from 'next-auth';
import { NextResponse } from 'next/server';

import { SETTINGS_CONFIG } from '~app/config/settings';
import { authConfig } from '~lib/config/auth.config';
import { getLocaleFromRequest } from '~lib/utils/request';
import { getRelativeUrlFromUrl, localizeRelativeUrl } from '~lib/utils/url';

const { CURRENT_ROUTE_KEY } = SETTINGS_CONFIG;
const { COOKIE_PREFERENCE_LANGUAGE_KEY, HEADER_PREFERENCE_LANGUAGE_KEY } = SETTINGS_CONFIG;

/**
 * Match all request paths except for the ones starting with:
 * - api (API routes)
 * - _next/static (static files)
 * - _next/image (image optimization files)
 * - manifest.json (PWA manifest file)
 * - favicon.ico (favicon file)
 */
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|manifest.json|favicon.ico).*)'],
};

export const { auth } = NextAuth(authConfig);

const middleware = auth((request) => {
  const url = request.url;

  /*------------------------------------------------------------------------------------------------*/

  /**
   * Set the current route in the request headers to be used later.
   */
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set(CURRENT_ROUTE_KEY, url);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  /*------------------------------------------------------------------------------------------------*/

  /**
   * Handle multi-language support in a Next.js application.
   * It gets the locale from the request, checks if a redirect is necessary, and sets the locale preference.
   */
  const { locale, redirect } = getLocaleFromRequest(request);

  response.headers.set(HEADER_PREFERENCE_LANGUAGE_KEY, locale);
  response.cookies.set(COOKIE_PREFERENCE_LANGUAGE_KEY, locale);

  const relativeUrl = getRelativeUrlFromUrl(url);

  if (redirect) {
    /**
     * Constructs a redirect URL based on the locale code, separator, and relative URL.
     * Replaces any consecutive forward slashes with a single forward slash.
     */
    const redirectUrl = new URL(localizeRelativeUrl(relativeUrl, locale), url);

    return NextResponse.redirect(redirectUrl);
  }

  /*------------------------------------------------------------------------------------------------*/

  return response;
});

export default middleware;
