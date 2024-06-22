import type Resources from '~types/resources';

/**
 * The type for API error messages to help translate
 */
export type APIErrorMessage = keyof Resources['api']['error'];

/**
 * The type for API success messages to help translate
 */
export type APISuccessMessage = keyof Resources['api']['success'];

/**
 * The type for the return of an API message
 * It can be an error or a success message
 */
export type APIMessageReturn =
  | { error: APIErrorMessage; success?: never }
  | { success: APISuccessMessage; error?: never };
