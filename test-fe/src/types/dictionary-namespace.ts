import type Resources from '~types/resources';

/**
 * Type representing an internationalization (i18n) namespace.
 * It can be a key of the Resources object or an array of such keys.
 */
export type I18nNamespace = keyof Resources | (keyof Resources)[];
