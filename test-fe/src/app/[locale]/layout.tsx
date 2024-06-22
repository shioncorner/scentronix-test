import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { dir } from 'i18next';
import { type Metadata, type Viewport } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { type ReactNode } from 'react';

import { SETTINGS_CONFIG } from '~app/config/settings';
import { SITE_CONFIG } from '~app/config/site';
import { Provider } from '~app/provider';
import { Header } from '~components/shared/header';
import { Toaster } from '~components/ui/toast';
import { LANGUAGES } from '~constants/language';
import { getCurrentUser } from '~lib/auth';
import { matchRoute } from '~lib/utils/match-route';
import { UrlSchema } from '~schema/url';
import { serverTranslation } from '~translation/server';
import type { WithLocaleParamsProps } from '~types/params';

import { theme } from '../../theme';

import '~styles/globals.css';

const { CURRENT_ROUTE_KEY } = SETTINGS_CONFIG;

/**
 * The Inter font with the latin subset and a custom CSS variable.
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

/**
 * The metadata for the Next.js page.
 */
export const generateMetadata = async ({ params: { locale } }: WithLocaleParamsProps) => {
  const { t } = await serverTranslation(locale, 'metadata');

  const headersList = headers();
  const currentRouteUrl = headersList.get(CURRENT_ROUTE_KEY);
  const matchRouteConfig = matchRoute(currentRouteUrl);

  const validatedUrl = UrlSchema.safeParse(SITE_CONFIG.url);
  const url = validatedUrl.success ? new URL(validatedUrl.data) : undefined;

  const metaDescription =
    matchRouteConfig && matchRouteConfig?.metadata?.description
      ? t(matchRouteConfig.metadata.description)
      : t(SITE_CONFIG.description || 'site-description');
  const metaTitle =
    matchRouteConfig && matchRouteConfig?.metadata?.title && t(matchRouteConfig.metadata.title)
      ? `${t(matchRouteConfig.metadata.title)} - ${t('site-title')}`
      : t(SITE_CONFIG.title || 'site-title');

  const metadata: Metadata = {
    authors: [
      {
        name: SITE_CONFIG.author.name,
        url: SITE_CONFIG.author.url,
      },
    ],
    creator: SITE_CONFIG.author.name,
    description: metaDescription,
    keywords: SITE_CONFIG.keywords,
    manifest: `${SITE_CONFIG.url}/assets/site.webmanifest`,
    metadataBase: url,
    icons: {
      icon: SITE_CONFIG.icons?.icon,
      shortcut: SITE_CONFIG.icons?.shortcut,
      apple: SITE_CONFIG.icons?.apple,
    },
    openGraph: {
      type: SITE_CONFIG.ogType,
      url,
      title: metaTitle,
      description: metaDescription,
    },
    title: metaTitle,
    twitter: {
      title: metaTitle,
      description: metaDescription,
      creator: SITE_CONFIG.author.name,
    },
  };

  return metadata;
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

/**
 * Generates the static paths for the layout component.
 */
export const generateStaticParams = () => LANGUAGES.map((locale) => ({ locale }));

/**
 * The props for the Layout component.
 */
type LayoutProps = {
  children: ReactNode;
} & WithLocaleParamsProps;

/**
 * Renders the layout of the application for the Next.js page.
 *
 * @param children - The child components to render within the layout.
 * @returns The rendered layout.
 */
const Layout = async ({ children, params: { locale } }: LayoutProps) => {
  const isLoggedIn = !!(await getCurrentUser());

  return (
    <html className='dark' dir={dir(locale)} lang={locale} suppressHydrationWarning>
      <head />

      <body className={inter.variable}>
        <Provider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <div className='w-full flex-col flex-center'>
                <Header isLoggedIn={isLoggedIn} />

                {children}

                <Toaster />
              </div>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
