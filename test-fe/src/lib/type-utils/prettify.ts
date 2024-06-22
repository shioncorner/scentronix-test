/**
 * Creates a new type that takes an object type and makes the hover overlay more readable.
 *
 * @typeParam T - The input type to prettify.
 * @example
 * ```
 * Prettify<
 * <OverrideProps<RouteObject,
 *  {
 *    path: Page;
 *  }
 * >>;
 * ```
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
