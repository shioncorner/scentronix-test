'use client';

import { useParams, usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { SETTINGS_CONFIG } from '~app/config/settings';
import { getLocaleFromParams, getLocaleFromRelativeUrl } from '~lib/utils/locale';
import type { Language } from '~types/language';

const { FALLBACK_LANGUAGE } = SETTINGS_CONFIG;

/**
 * Custom hook to get the current language locale based on the URL params or pathname.
 *
 * @returns - The current language locale.
 */
export const useLocale = (): Language => {
  const params = useParams();
  const pathname = usePathname();

  const localeFromParams = getLocaleFromParams(params);
  const localeFromPathname = getLocaleFromRelativeUrl(pathname);

  const locale = useMemo(() => {
    const selectedLocale = localeFromParams ?? localeFromPathname;

    if (selectedLocale) {
      return selectedLocale;
    }

    return FALLBACK_LANGUAGE;
  }, [localeFromParams, localeFromPathname]);

  return locale;
};
