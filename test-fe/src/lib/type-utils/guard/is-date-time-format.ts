import { DateTime } from 'luxon';

import { DATETIME_FORMAT } from '~constants/datetime-format';
import type { DateTimeFormats } from '~types/datetime-format';

/**
 * Checks if a given format is a valid Luxon DateTime format.
 *
 * @param format - The format to check.
 * @returns Whether the format is a valid Luxon DateTime format.
 * @example
 * isDateTimeFormat('DATE_HUGE');
 */
export const isDateTimeFormat = (format: string): format is DateTimeFormats =>
  format in DateTime && DATETIME_FORMAT.includes(format);
