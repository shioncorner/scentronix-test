'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { signInWithEmail } from '~actions/sign-in-with-email';
import { FormItemWithMessage } from '~components/shared/form-item-with-message';
import { Separator } from '~components/shared/separator';
import { Button } from '~components/ui/button';
import { Form, FormControl, FormField } from '~components/ui/form';
import { Input } from '~components/ui/input';
import { useToast } from '~components/ui/toast';
import { SignInWithEmailSchema } from '~schema/form/sign-in-with-email';
import { useTranslation } from '~translation/client';
import { SIGN_IN_ERROR } from '~types/error/sign-in-error';
import type { SignInWithEmailProps } from '~types/form/sign-in-with-email';

import { AuthSocial } from '../../auth-social';

/**
 * A component that renders a Sign In with Email.
 */
export const SignInForm = () => {
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const { t } = useTranslation('auth');
  const { t: apiTranslate } = useTranslation('api');
  const { toast } = useToast();
  const form = useForm<SignInWithEmailProps>({
    resolver: zodResolver(SignInWithEmailSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const searchParams = useSearchParams();

  const urlError = searchParams.get('error');

  useEffect(() => {
    /**
     * Show an error toast if the email on the account is already linked, but not with this OAuth account
     */
    if (urlError === SIGN_IN_ERROR.OAuthAccountNotLinked) {
      toast({
        variant: 'destructive',
        title: apiTranslate('error.sign-in-failed'),
        description: apiTranslate('error.email-already-used'),
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlError]);

  const handleSignInWithEmail: SubmitHandler<SignInWithEmailProps> = async (
    values: SignInWithEmailProps,
  ) => {
    setIsEmailLoading(true);

    const res = await signInWithEmail(values);

    setIsEmailLoading(false);

    if (res?.error) {
      toast({
        variant: 'destructive',
        title: apiTranslate('error.sign-in-failed'),
        description: apiTranslate(`error.${res.error}`),
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form className='space-y-6' noValidate onSubmit={form.handleSubmit(handleSignInWithEmail)}>
          <div className='flex flex-col space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItemWithMessage>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isDisabled}
                      placeholder={t('email-placeholder')}
                      type='email'
                    />
                  </FormControl>
                </FormItemWithMessage>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItemWithMessage>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isDisabled}
                      placeholder={t('password-placeholder')}
                      type='password'
                    />
                  </FormControl>
                </FormItemWithMessage>
              )}
            />

            <Button disabled={isDisabled} isLoading={isEmailLoading} type='submit'>
              {t('sign-in.with-email')}
            </Button>
          </div>
        </form>
      </Form>

      <Separator message={t('continue-with')} />

      <AuthSocial isEmailLoading={isEmailLoading} setIsDisabled={setIsDisabled} />
    </>
  );
};
