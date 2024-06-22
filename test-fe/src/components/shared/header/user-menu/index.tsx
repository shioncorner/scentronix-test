'use client';

import { signOut } from 'next-auth/react';

import { SETTINGS_CONFIG } from '~app/config/settings';
import { Icons } from '~components/shared/icons';
import { Avatar, AvatarFallback, AvatarImage } from '~components/ui/avatar';
import { Button } from '~components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~components/ui/dropdown-menu';
import { useTranslation } from '~translation/client';

const { SIGN_OUT_REDIRECT_URL } = SETTINGS_CONFIG;

/**
 * A component that renders a user menu.
 */
export const UserMenu = () => {
  const { t } = useTranslation('auth');

  const handleSignOut = () => signOut({ callbackUrl: SIGN_OUT_REDIRECT_URL });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='relative size-9 rounded-full' variant='ghost'>
          <Avatar className='size-9'>
            <AvatarImage alt='User Avatar' />

            <AvatarFallback>
              <Icons.User className='size-5' />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={handleSignOut}>{t('sign-out')}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
