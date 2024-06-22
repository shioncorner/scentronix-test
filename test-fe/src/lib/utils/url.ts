import { LANGUAGES } from '~constants/language';
import { addLocaleToRelativeUrl, getLocaleFromRelativeUrl } from '~lib/utils/locale';
import { UrlSchema } from '~schema/url';
import type { Language } from '~types/language';

/**
 * Check if relative URL is missing locale
 *
 * @param relativeUrl - The relative URL.
 * @param locale - The locale.
 * @returns True if the relative URL is missing locale, false otherwise.
 */
export const relativeUrlIsMissingLocale = (relativeUrl: string, locale: string): boolean =>
  LANGUAGES.every(
    (language) => !relativeUrl.startsWith(`/${language}`) && relativeUrl !== `/${locale}`,
  );

/**
 * Get the relative URL from the URL
 *
 * @param url - The URL to get the relative URL from.
 * @throws If the URL is not valid.
 */
export const getRelativeUrlFromUrl = (url: string): string => {
  const validatedUrl = UrlSchema.safeParse(url);

  if (!validatedUrl.success) {
    throw new Error('The URL is not valid');
  }

  const relativeUrl = url.replace(new URL(url).origin, '');

  return relativeUrl;
};

/**
 * Returns a localized relative URL based on the provided relative URL and locale.
 *
 * @param relativeUrl - The original relative URL.
 * @param locale - The language locale to use.
 * @returns The localized relative URL.
 * @example
 * const localizedRelativeURL = localizeRelativeUrl('/about', 'en');
 */
export const localizeRelativeUrl = (relativeUrl: string, locale: Language): string => {
  const localeFromHref = getLocaleFromRelativeUrl(relativeUrl);

  if (localeFromHref) {
    return relativeUrl;
  }

  return addLocaleToRelativeUrl(relativeUrl, locale);
};
