import { DATETIME_FORMAT } from '~constants/datetime-format';

/**
 * DateTimeFormats is a type that represents a union of string literal types.
 * Each string literal type is a possible format that can be used with DateTime.
 */
export type DateTimeFormats = (typeof DATETIME_FORMAT)[number];
