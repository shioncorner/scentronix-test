import { type InitOptions } from 'i18next';

import { SETTINGS_CONFIG } from '~app/config/settings';
import { LANGUAGES } from '~constants/language';
import { formatLanguageValue } from '~lib/utils/format-language-value';
import type { I18nNamespace } from '~types/dictionary-namespace';
import type { Language } from '~types/language';

const { DEFAULT_NAMESPACE, FALLBACK_LANGUAGE, DEBUG_I18N } = SETTINGS_CONFIG;

/**
 * Returns an object with options for i18next initialization.
 *
 * @param language - The language to use. Defaults to 'en'.
 * @param namespace - The namespace(s) to use. Defaults to 'default'.
 * @returns An object with i18next options.
 */
export const getTranslationConfig = (
  language: Language = FALLBACK_LANGUAGE,
  namespace: I18nNamespace = DEFAULT_NAMESPACE,
): InitOptions => ({
  debug: DEBUG_I18N,
  load: 'languageOnly',
  lng: language,
  fallbackLng: FALLBACK_LANGUAGE,
  supportedLngs: LANGUAGES,
  ns: namespace,
  defaultNS: DEFAULT_NAMESPACE,
  fallbackNS: DEFAULT_NAMESPACE,
  interpolation: {
    escapeValue: false,
    format: formatLanguageValue,
  },
});
