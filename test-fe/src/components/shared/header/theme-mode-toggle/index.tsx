'use client';

import { useTheme } from 'next-themes';

import { Icons } from '~components/shared/icons';
import { Button } from '~components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~components/ui/dropdown-menu';
import { THEMES } from '~constants/theme';
import { useTranslation } from '~translation/client';
import type { Theme } from '~types/theme';

/**
 * A component that renders a theme mode toggle.
 */
export const ThemeModeToggle = () => {
  const { t } = useTranslation('theme');
  const { setTheme } = useTheme();

  const handleChangeTheme = (theme: Theme) => () => setTheme(theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='outline'>
          <Icons.Sun className='size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Icons.Moon className='absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />

          <span className='sr-only'>{t('toggle-theme')}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        {THEMES.map((theme) => (
          <DropdownMenuItem key={theme} onClick={handleChangeTheme(theme)}>
            {t(theme)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
