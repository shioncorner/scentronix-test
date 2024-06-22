'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { type ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { THEME, THEMES } from '~constants/theme';
import { store } from '~store';

/**
 * The props for the Provider component.
 */
type ProviderProps = {
  children: ReactNode;
};

/**
 * Provider component includes all internal app providers and external providers from third-party libraries that wraps the entire application
 *
 * @param children - The child components to be wrapped by the Provider.
 * @returns The Provider component.
 * @example
 * ```
 * <Provider>
 *  <App />
 * </Provider>
 * ```
 */
export const Provider = ({ children }: ProviderProps) => (
  <SessionProvider>
    <ReduxProvider store={store}>
      <ThemeProvider
        attribute='class'
        defaultTheme={THEME.LIGHT}
        disableTransitionOnChange
        enableSystem
        themes={THEMES}
      >
        {children}
      </ThemeProvider>
    </ReduxProvider>
  </SessionProvider>
);
