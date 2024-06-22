import { UserRole } from '@prisma/client';

import { LANGUAGES } from '~constants/language';
import { PAGE } from '~constants/page';
import { getLocalizedPages } from '~lib/utils/locale';
import type { RouteConfigProps } from '~types/route';

/**
 * An array of route objects that define the paths and elements for the application's pages.
 */
export const ROUTES_CONFIG: RouteConfigProps[] = [
  {
    path: PAGE.HOME,
    metadata: {
      description: 'home-description',
      title: 'home-title',
    },
  },
  {
    path: PAGE.SHOP,
    metadata: {
      description: 'shop-description',
      title: 'shop-title',
    },
  },
  {
    path: PAGE.RECIPES,
    metadata: {
      description: 'recipes-description',
      title: 'recipes-title',
    },
  },
  {
    path: PAGE.CATEGORIES,
    metadata: {
      description: 'categories-description',
      title: 'categories-title',
    },
  },
  {
    path: PAGE.COLLECTIONS,
    metadata: {
      description: 'collections-description',
      title: 'collections-title',
    },
  },
  {
    path: PAGE.RESOURCES,
    metadata: {
      description: 'resources-description',
      title: 'resources-title',
    },
  },
  {
    path: PAGE.LEARN,
    metadata: {
      description: 'learn-description',
      title: 'learn-title',
    },
  },
  {
    path: PAGE.ABOUT,
    metadata: {
      description: 'about-description',
      title: 'about-title',
    },
  },
  {
    path: PAGE.BLOG,
    metadata: {
      description: 'blog-description',
      title: 'blog-title',
    },
  },
  {
    path: PAGE.SIGN_IN,
    metadata: {
      description: 'sign-in-description',
      title: 'sign-in-title',
    },
    auth: [],
  },
  {
    path: PAGE.SIGN_UP,
    metadata: {
      description: 'sign-up-description',
      title: 'sign-up-title',
    },
    auth: [],
  },
  {
    path: PAGE.TERM_AND_PRIVACY,
    metadata: {
      description: 'terms-and-privacy-description',
      title: 'terms-and-privacy-title',
    },
    auth: [],
  },
  {
    path: PAGE.SETTINGS,
    metadata: {
      description: 'settings-description',
      title: 'settings-title',
    },
    auth: [UserRole.USER],
  },
  {
    path: PAGE.ADMIN,
    metadata: {
      description: 'admin-description',
      title: 'admin-title',
    },
    auth: [UserRole.ADMIN],
  },
  {
    path: PAGE.ERROR_404,
    metadata: {
      description: 'error-404-description',
      title: 'error-404-title',
    },
  },
];

/**
 * An array of pages that are accessible to the public
 * These routes do not require authentication
 */
const publicPages = ROUTES_CONFIG.filter((route) => route.auth === undefined).map(
  (route) => route.path,
);

/**
 * An array of pages that are used for authentication
 * These pages will redirect logged in users to the SIGN_IN_REDIRECT_URL in SETTINGS_CONFIG
 */
const authPages = ROUTES_CONFIG.filter((route) => route.auth && route.auth.length === 0).map(
  (route) => route.path,
);

/**
 * Add locale support for public and authentication pages
 */
export const publicPagesWithLocale = getLocalizedPages(publicPages, LANGUAGES);

export const authPagesWithLocale = getLocalizedPages(authPages, LANGUAGES);
