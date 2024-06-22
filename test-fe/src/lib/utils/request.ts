import { type NextRequest } from 'next/server';

import { SETTINGS_CONFIG } from '~app/config/settings';
import { isLanguage } from '~lib/type-utils/guard/is-language';
import { getLocaleFromRelativeUrl } from '~lib/utils/locale';
import { getRelativeUrlFromUrl } from '~lib/utils/url';
import type { Language } from '~types/language';

const {
  FALLBACK_LANGUAGE,
  COOKIE_PREFERENCE_LANGUAGE_KEY,
  HEADER_PREFERENCE_LANGUAGE_KEY,
  ACCEPTED_LANGUAGE_KEY,
} = SETTINGS_CONFIG;

/**
 * Returns the preferred locale based on the request headers and cookies.
 *
 * @param request - The Next.js request object.
 * @returns The preferred locale as a lowercase string, or undefined if not found.
 */
export const getPreferredLocaleFromRequest = (request: NextRequest): Language | undefined => {
  const headerPreferredLanguage = request.headers.get(HEADER_PREFERENCE_LANGUAGE_KEY);
  const cookiePreferredLanguage = request.cookies.get(COOKIE_PREFERENCE_LANGUAGE_KEY);

  const locale = headerPreferredLanguage ?? cookiePreferredLanguage?.value;

  if (locale && isLanguage(locale)) {
    return locale;
  }

  return undefined;
};

/**
 * Returns the accepted locale from the request headers.
 *
 * @param request - The Next.js request object.
 * @returns The accepted locale if found, otherwise undefined.
 */
export const getAcceptedLocaleFromRequest = (request: NextRequest): Language | undefined => {
  const acceptedLanguages = request.headers.get(ACCEPTED_LANGUAGE_KEY);

  if (!acceptedLanguages) {
    return undefined;
  }

  const acceptLanguagesOption = acceptedLanguages.split(',');

  for (const option of acceptLanguagesOption) {
    const [locale] = (option.trim().split(';')[0] || '').split('-');

    if (locale && isLanguage(locale)) {
      return locale;
    }

    return undefined;
  }

  return undefined;
};

/**
 * Determines the locale to use for the current request based on the current locale, preferred locale,
 * and accepted locale. If no locale is found, the fallback language is used.
 *
 * @param request - The Next.js request object.
 * @returns An object containing the code of the determined locale, and a boolean indicating whether a redirect is needed.
 */
export const getLocaleFromRequest = (
  request: NextRequest,
): { locale: Language; redirect: boolean } => {
  const url = request.url;
  const relativeUrl = getRelativeUrlFromUrl(url);
  const currentLocale = getLocaleFromRelativeUrl(relativeUrl);
  const preferredLocale = getPreferredLocaleFromRequest(request);
  const acceptedLocale = getAcceptedLocaleFromRequest(request);

  if (currentLocale) {
    return { locale: currentLocale, redirect: false };
  }

  if (preferredLocale) {
    return { locale: preferredLocale, redirect: true };
  }

  if (acceptedLocale) {
    return { locale: acceptedLocale, redirect: true };
  }

  return { locale: FALLBACK_LANGUAGE, redirect: true };
};
