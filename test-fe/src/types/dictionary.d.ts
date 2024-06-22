import { SETTINGS_CONFIG } from '~app/config/settings';

import type Resources from './resources';

const { DEFAULT_NAMESPACE } = SETTINGS_CONFIG;

/**
 * Declaration merging for the 'i18next' module.
 */
declare module 'i18next' {
  /**
   * Custom options for i18next.
   */
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NAMESPACE;
    resources: Resources;
  }
}
