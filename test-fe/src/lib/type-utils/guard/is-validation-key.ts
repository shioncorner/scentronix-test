import validation from '~translation/locales/en/validation.json';
import type { ValidationTranslationKey } from '~types/validation';

/**
 * Checks if a given format is a valid Luxon DateTime format.
 *
 * @param format - The format to check.
 * @returns Whether the format is a valid Luxon DateTime format.
 * @example
 * isValidationKey('email-required');
 */
export const isValidationKey = (format: string): format is ValidationTranslationKey =>
  format in validation;
