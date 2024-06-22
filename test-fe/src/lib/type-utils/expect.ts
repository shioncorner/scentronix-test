/**
 * A type helper that expects a type parameter to be `true`.
 *
 * @returns The type parameter `T`.
 * @typeParam T - A boolean type parameter that should be `true`.
 * @example
 * type IsTrue = Expect<true>;
 */
export type Expect<T extends true> = T;

/**
 * A type helper that expects a type parameter to be `true`.
 *
 * @returns The type parameter `T` if it is `true`.
 * @typeParam T - The type parameter to be checked.
 * @example
 * type IsTrue = ExpectTrue<true>; // IsTrue is `true`
 * type IsNotTrue = ExpectTrue<false>; // Error: Type 'false' does not satisfy the constraint 'true'.
 */
export type ExpectTrue<T extends true> = T;

/**
 * A type helper that expects a type parameter to be `false`.
 *
 * @returns The type parameter `T` if it is `false`.
 * @typeParam T - The type parameter to be checked against `false`.
 * @example
 * type IsFalse = ExpectFalse<false>; // IsFalse is of type `false`
 * type IsNotFalse = ExpectFalse<true>; // This will result in a compilation error
 */
export type ExpectFalse<T extends false> = T;
