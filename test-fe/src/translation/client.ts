'use client';

import { default as i18next } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next, useTranslation as useTransAlias } from 'react-i18next';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { SETTINGS_CONFIG } from '~app/config/settings';
import { LANGUAGES } from '~constants/language';
import { useLocale } from '~hooks/use-locale';
import { getTranslationConfig } from '~lib/config/translation.config';
import { type I18nNamespace } from '~types/dictionary-namespace';

const { DEFAULT_NAMESPACE } = SETTINGS_CONFIG;

/**
 * Checks if the code is running on the server side or client side.
 *
 * @returns - Returns true if the code is running on the server side, false otherwise.
 */
const runsOnServerSide = typeof window === 'undefined';

/**
 * Initializes the i18n library with the necessary plugins and configuration.
 *
 * @throws An error if the initialization fails.
 */
i18next
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      /**
       * A function that returns a Promise that resolves to the imported JSON file for a given language and namespace.
       *
       * @param language - The language code for the desired JSON file.
       * @param namespace - The namespace for the desired JSON file.
       * @returns A Promise that resolves to the imported JSON file.
       */
      (language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .use(initReactI18next)
  .init({
    ...getTranslationConfig(),

    /**
     * Detect the language on the client
     */
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? LANGUAGES : [],
  })
  .catch((error) => {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error('Failed to initialize i18n');
  });

/**
 * A hook that provides the `i18n` and `t` functions from `react-i18next` for a given locale and namespace.
 *
 * @param namespace - The namespace to use for translations, default value is DEFAULT_NAMESPACE.
 * @returns An object containing the `i18n` and `t` functions.
 * @typeParam T - The type of the namespace keys.
 * @example
 * ```
 * const { i18n, t } = useTranslation();
 * ```
 */
export const useTranslation = <T extends I18nNamespace = typeof DEFAULT_NAMESPACE>(
  namespace: T = DEFAULT_NAMESPACE as T,
) => {
  const locale = useLocale();
  const { i18n, t } = useTransAlias(namespace);

  /**
   * If the code is running on the server side and the locale has been specified
   * and the resolved language is not the same as the specified locale, change the
   * language to the specified locale using the i18n.changeLanguage method.
   */
  if (runsOnServerSide && locale && i18n.resolvedLanguage !== locale) {
    i18n.changeLanguage(locale).catch((error) => {
      if (error instanceof Error) {
        throw error;
      }

      throw new Error('Failed to change the language');
    });
  }

  /**
   * If the code is running on the client side and the locale has been specified
   * and the resolved language is not the same as the specified locale, change the
   * language to the specified locale using the i18n.changeLanguage method.
   */
  useDeepCompareEffect(() => {
    if (!runsOnServerSide && locale && i18n.resolvedLanguage !== locale) {
      i18n.changeLanguage(locale).catch((error) => {
        if (error instanceof Error) {
          throw error;
        }

        throw new Error('Failed to change the language');
      });
    }
  }, [locale, i18n]);

  return { i18n, t };
};
