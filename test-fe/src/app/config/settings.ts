import { LANGUAGE } from '~constants/language';
import { PAGE } from '~constants/page';
import type { SettingsConfigProps } from '~types/settings';

/**
 * Configuration settings for the application.
 */
export const SETTINGS_CONFIG: SettingsConfigProps = {
  DEBUG_I18N: false,

  DEFAULT_NAMESPACE: 'common',

  FALLBACK_LANGUAGE: LANGUAGE.EN,

  ACCEPTED_LANGUAGE_KEY: 'Accept-Language',
  COOKIE_PREFERENCE_LANGUAGE_KEY: 'language-preference',
  CURRENT_ROUTE_KEY: 'x-current-router',
  CALLBACK_URL_PARAMETER_KEY: 'from',
  HEADER_PREFERENCE_LANGUAGE_KEY: 'X-Language-Preference',

  SIGN_IN_REDIRECT_URL: PAGE.HOME,
  SIGN_OUT_REDIRECT_URL: PAGE.HOME,
  UNAUTHORIZED_REDIRECT_URL: PAGE.SIGN_IN,
};
