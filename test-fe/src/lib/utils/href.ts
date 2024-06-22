import type { Language } from '~types/language';

/**
 * Checks if the given href is an absolute URL.
 *
 * @param href - The href to check.
 * @returns True if the href is an absolute URL, false otherwise.
 */
export const isAbsoluteHref = (href: string) => {
  const validatedHref = href.startsWith('http://') || href.startsWith('https://');

  if (validatedHref) {
    console.warn("External URL's should use <a> rather than the Link component", href);
  }

  return validatedHref;
};

/**
 * Determines if the provided href is a valid locale href for the given locale.
 *
 * @param href - The href to validate.
 * @param locale - The locale to validate against.
 * @returns A boolean indicating whether the href is a valid locale href.
 */
export const isLocaleHref = (href: string, locale: Language) => {
  const validatedHref = href === `/${locale}` || href.startsWith(`/${locale}/`);

  if (validatedHref) {
    console.warn('The locale should never be provided manually through the `href` prop.', href);
  }

  return validatedHref;
};
