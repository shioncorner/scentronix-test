import { LANGUAGES } from '~constants/language';
import type { Language } from '~types/language';

/**
 * Checks if a given string is a valid language code.
 *
 * @param language - The string to check.
 * @returns True if the string is a valid language code, false otherwise.
 * @example
 * isLanguage('en')
 */
export const isLanguage = (language: string): language is Language =>
  LANGUAGES.map((item) => item.toLowerCase()).includes(language.toLowerCase());
