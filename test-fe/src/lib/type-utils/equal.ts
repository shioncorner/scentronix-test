/**
 * Determines whether two types are equal.
 *
 * @returns `true` if the types are equal, `false` otherwise.
 * @typeParam X - The first type to compare.
 * @typeParam Y - The second type to compare.
 * @example
 * ```
 * type IsEqual = Equal<1, 1>; // IsEqual is `true`
 * ```
 */
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
