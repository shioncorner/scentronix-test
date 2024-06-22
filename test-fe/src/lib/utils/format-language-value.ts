import { DateTime } from 'luxon';

import { isDateTimeFormat } from '~lib/type-utils/guard/is-date-time-format';

/**
 * Formats a value based on its type and the provided format.
 *
 * @param value - The value to format.
 * @param format - The format to use for formatting.
 * @param language - The language to use for formatting.
 * @returns The formatted value.
 * @example
 * const formattedValue = formatLanguageValue(new Date(), 'DATE_HUGE', 'en');
 */
export const formatLanguageValue = (value: unknown, format?: string, language?: string) => {
  /**
   * If the value is a Date and the format is a valid Luxon DateTime format, format the date using Luxon.
   */
  if (value instanceof Date && language && format && isDateTimeFormat(format)) {
    const formatOptions = DateTime[`${format}`];

    return DateTime.fromJSDate(value).setLocale(language).toLocaleString(formatOptions);
  }

  /**
   * If the value is an object, stringify it.
   */
  if (typeof value === 'object' && value !== null) {
    return JSON.stringify(value);
  }

  /**
   * Otherwise, return the value as a string.
   */
  return String(value);
};
