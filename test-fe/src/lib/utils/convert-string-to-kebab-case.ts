/**
 * Converts a string to kebab case.
 *
 * @param text - The string to convert.
 * @returns The kebab case version of the input string.
 * @example
 * const kebabCase = convertStringToKebabCase('Hello World');
 */
export const convertStringToKebabCase = (text: string) => text.replace(/\s+/g, '-').toLowerCase();
