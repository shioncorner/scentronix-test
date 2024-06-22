import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { SETTINGS_CONFIG } from '~app/config/settings';
import { getTranslationConfig } from '~lib/config/translation.config';
import type { I18nNamespace } from '~types/dictionary-namespace';
import type { Language } from '~types/language';

const { DEFAULT_NAMESPACE } = SETTINGS_CONFIG;

/**
 * Initializes an i18next instance with the specified language and namespace.
 *
 * @param language - The language to use for localization.
 * @param namespace - The namespace or namespaces to use for localization.
 * @returns A Promise that resolves to the initialized i18next instance.
 */
export const initI18next = async (language: Language, namespace: I18nNamespace) => {
  const i18nInstance = createInstance();

  await i18nInstance
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
    .init(getTranslationConfig(language, namespace));

  return i18nInstance;
};

/**
 * Initializes i18next instance with the specified language and namespaces, and returns an object containing the i18n instance and a `t` function for translating messages.
 *
 * @param language - The language to use for translations.
 * @param namespaces - The namespaces to use for translations. Defaults to the default namespace if not specified.
 * @returns An object containing the i18n instance and a `t` function for translating messages.
 * @example
 * ```
 * import type { WithLocaleParamsProps } from '~types/params';
 *
 * type HomeProps = WithLocaleParamsProps;
 *
 * const Home = async ({ params: { locale } }: HomeProps) => {
 *  const { i18n, t } = await serverTranslation(locale, 'sign-in');
 *  ...
 *  return <>{t('sign-in')}</>;
 * };
 *
 * ```
 */
export const serverTranslation = async <T extends I18nNamespace = typeof DEFAULT_NAMESPACE>(
  language: Language,
  namespaces: T = DEFAULT_NAMESPACE as T,
) => {
  const i18nextInstance = await initI18next(language, namespaces);

  return {
    i18n: i18nextInstance,
    t: i18nextInstance.getFixedT(language, namespaces),
  };
};
