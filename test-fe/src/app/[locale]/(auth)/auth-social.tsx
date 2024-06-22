'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

import { SETTINGS_CONFIG } from '~app/config/settings';
import { Icons } from '~components/shared/icons';
import { Button } from '~components/ui/button';
import { PAGE } from '~constants/page';
import { useLocale } from '~hooks/use-locale';
import { localizeRelativeUrl } from '~lib/utils/url';
import { useTranslation } from '~translation/client';

const { CALLBACK_URL_PARAMETER_KEY } = SETTINGS_CONFIG;

/**
 * The props for the Social component.
 */
type AuthSocialProps = {
  isEmailLoading: boolean;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
};

/**
 * A component that renders a AuthSocial login.
 */
export const AuthSocial = ({ isEmailLoading, setIsDisabled }: AuthSocialProps) => {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);

  const { t } = useTranslation('auth');
  const searchParams = useSearchParams();
  const locale = useLocale();

  const disabled = isEmailLoading || isGoogleLoading || isGithubLoading;

  useEffect(() => {
    setIsDisabled(disabled);
  }, [setIsDisabled, disabled]);

  const callbackUrl =
    searchParams.get(CALLBACK_URL_PARAMETER_KEY) || localizeRelativeUrl(PAGE.HOME, locale);

  const handleSignInWithGoogle = async () => {
    setIsGoogleLoading(true);

    await signIn('google', { callbackUrl });
  };

  const handleSignInWithGithub = async () => {
    setIsGithubLoading(true);

    await signIn('github', { callbackUrl });
  };

  return (
    <div className='gap-x-2 flex-center'>
      <Button
        className='flex-1'
        disabled={disabled}
        onClick={handleSignInWithGoogle}
        variant='outline'
      >
        {isGoogleLoading ? (
          <Icons.Loader className='mr-2 size-4 animate-spin' />
        ) : (
          <Icons.Google className='mr-2 size-4' />
        )}

        {t('sign-in.with-google')}
      </Button>

      <Button
        className='flex-1'
        disabled={disabled}
        onClick={handleSignInWithGithub}
        variant='outline'
      >
        {isGithubLoading ? (
          <Icons.Loader className='mr-2 size-4 animate-spin' />
        ) : (
          <Icons.Github className='mr-2 size-4' />
        )}

        {t('sign-in.with-github')}
      </Button>
    </div>
  );
};
