import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

import { isLanguage } from '~lib/type-utils/guard/is-language';
import { relativeUrlIsMissingLocale } from '~lib/utils/url';
import { LocaleParamsSchema } from '~schema/params';
import type { Language } from '~types/language';

/**
 * Returns the locale from the URL.
 * For example, if the request URL is https://example.com/en/about, the locale is en.
 *
 * @param url - The URL string
 * @returns The locale from the request URL.
 */
export const getLocaleFromRelativeUrl = (url: string): Language | undefined => {
  const locale = url.split('/')[1];

  if (locale && isLanguage(locale)) {
    return locale;
  }

  return undefined;
};

/**
 * Adds a locale to a relative URL.
 *
 * @param relativeUrl - The relative URL to which the locale will be added.
 * @param locale - The locale to be added to the URL.
 * @returns - The URL with the locale added. If the relative URL is the root ('/'), the locale is added directly after the root.
 * Otherwise, the locale is added before the relative URL. Multiple slashes are replaced with a single slash.
 */
export const addLocaleToRelativeUrl = (relativeUrl: string, locale: string): string =>
  relativeUrl === '/' ? `/${locale}` : `/${locale}${relativeUrl}`.replace(/\/+/g, '/');

/**
 * Returns the locale from the URL params.
 *
 * @param params - The URL params.
 * @returns The locale from the URL params.
 */
export const getLocaleFromParams = (params: Params) => {
  const validatedParams = LocaleParamsSchema.safeParse(params);

  if (!validatedParams.success) {
    return undefined;
  }

  const locale = validatedParams.data.locale;

  return locale;
};

/**
 * Change locale in relative URL.
 *
 * @param relativeUrl - The relative URL.
 * @param newLocale - The new locale.
 * @returns The relative URL with the new locale.
 */
export const changeLocaleInRelativeUrl = (relativeUrl: string, newLocale: string): string => {
  const isMissingLocale = relativeUrlIsMissingLocale(relativeUrl, newLocale);

  /**
   * If the relative URL is missing locale, add the locale to the relative URL.
   */
  if (isMissingLocale) {
    return `/${newLocale}${relativeUrl}`;
  }

  const segments = relativeUrl.split('/');

  /**
   * Assume the locale is always the second segment (index 1)
   */
  const currentLocale = segments[1];

  /**
   * If the current locale is not the new locale, change it
   */
  if (currentLocale !== newLocale) {
    segments[1] = newLocale;
  }

  const newRelativeUrl = segments.join('/');

  return newRelativeUrl;
};

/**
 * This function takes an array of page routes and an array of locales, and returns an array of localized page routes.
 *
 * @param pages - An array of pages.
 * @param locales - The locales.
 * @example
 * ['/sign-in', '/en/sign-in', '/vi/sign-in']
 */
export const getLocalizedPages = (pages: string[], locales: Language[]) => {
  let pagesWithLocale = [...pages];

  pages.forEach((page) => {
    locales.forEach(
      (locale) => (pagesWithLocale = [...pagesWithLocale, addLocaleToRelativeUrl(page, locale)]),
    );
  });

  return pagesWithLocale;
};
