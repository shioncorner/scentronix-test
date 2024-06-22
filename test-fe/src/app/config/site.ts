import type { SiteConfigProps } from '~types/site';

/**
 * The site config.
 */
export const SITE_CONFIG: SiteConfigProps = {
  author: {
    name: 'Shion',
    url: 'https://github.com/shioncorner',
  },
  description: 'site-description',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/assets/favicon-16x16.png',
    apple: '/assets/apple-touch-icon.png',
  },
  ogType: 'website',
  keywords: [],
  title: 'site-title',
  url: 'http://localhost:4000',
};
