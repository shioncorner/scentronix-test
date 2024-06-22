/**
 * Returns the type of the values of an object.
 *
 * @returns The type of the values of the object.
 * @typeParam T - The object type.
 * @example
 * ```
 * const LOG_LEVEL = {
 * DEBUG: 'DEBUG',
 * WARNING: 'WARNING',
 * ERROR: 'ERROR',
 * } as const;
 *
 * type LogLevel = ObjectValue<typeof LOG_LEVEL>;
 * ```
 */
export type ObjectValue<T> = T[keyof T];
