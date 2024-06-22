'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SETTINGS_CONFIG } from '~app/config/settings';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~components/ui/select';
import { LANGUAGES } from '~constants/language';
import { changeLocaleInRelativeUrl } from '~lib/utils/locale';
import { useTranslation } from '~translation/client';
import type { Language } from '~types/language';

const { FALLBACK_LANGUAGE } = SETTINGS_CONFIG;

/**
 * The props for the Header component.
 */
type LanguageSelectorProps = {
  locale: Language;
};

/**
 * A component that renders a select with the available languages.
 */
export const LanguageSelector = ({ locale }: LanguageSelectorProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { t } = useTranslation('languages');

  const handleChangeLanguage = (language: Language) => {
    const relativeUrl = `${pathname}?${searchParams.toString()}`;
    const newRelativeUrl = changeLocaleInRelativeUrl(relativeUrl, language);

    router.push(newRelativeUrl);
  };

  const currentLanguage = LANGUAGES.find((language) => language === locale) || FALLBACK_LANGUAGE;

  return (
    <Select defaultValue={locale} onValueChange={handleChangeLanguage}>
      <SelectTrigger className='w-language-selector'>
        <SelectValue placeholder={t('select-language')}>
          <span>{t(currentLanguage)}</span>
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        {LANGUAGES.map((language) => (
          <SelectItem key={language} value={language}>
            {t(language)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
