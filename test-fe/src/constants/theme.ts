/**
 * An object containing the available theme options.
 */
export const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

/**
 * An array of all available themes.
 */
export const THEMES = Object.values(THEME);
