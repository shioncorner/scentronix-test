import type { Language } from '~types/language';
import type { Page } from '~types/page';
import type Resources from '~types/resources';

/**
 * The type of the configuration settings.
 */
export type SettingsConfigProps = {
  /**
   * The flag to enable the debug mode for internationalization.
   */
  DEBUG_I18N: boolean;

  /**
   * The default namespace for language translations.
   */
  DEFAULT_NAMESPACE: keyof Resources;

  /**
   * The fallback language to use in case the user's preferred language is not available.
   */
  FALLBACK_LANGUAGE: Language;

  /**
   * The key used to store in the request headers and cookies
   *
   * ACCEPTED_LANGUAGE_KEY: The name to get the accepted language from the request headers.
   * COOKIE_PREFERENCE_LANGUAGE_KEY: The name of the cookie used to store the user's language preference.
   * CURRENT_ROUTE_KEY: The name to save the current route in the request headers.
   * CALLBACK_URL_PARAMETER_KEY: The name of the query parameter used to store the callback URL.
   * HEADER_PREFERENCE_LANGUAGE_KEY: The name to save the current route in the request headers.
   */
  ACCEPTED_LANGUAGE_KEY: string;
  COOKIE_PREFERENCE_LANGUAGE_KEY: string;
  CURRENT_ROUTE_KEY: string;
  CALLBACK_URL_PARAMETER_KEY: string;
  HEADER_PREFERENCE_LANGUAGE_KEY: string;

  /**
   * The URL to redirect
   *
   * SIGN_IN_REDIRECT_URL: The URL to redirect after the user signs in.
   * SIGN_OUT_REDIRECT_URL: The URL to redirect after the user signs out.
   * UNAUTHORIZED_REDIRECT_URL: The URL to redirect when the user is not authorized.
   */
  SIGN_IN_REDIRECT_URL: Page;
  SIGN_OUT_REDIRECT_URL: Page;
  UNAUTHORIZED_REDIRECT_URL: Page;
};
