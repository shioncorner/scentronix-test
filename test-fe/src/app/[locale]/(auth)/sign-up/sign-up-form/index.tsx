'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { signUp } from '~actions/sign-up';
import { FormItemWithMessage } from '~components/shared/form-item-with-message';
import { Separator } from '~components/shared/separator';
import { Button } from '~components/ui/button';
import { Form, FormControl, FormField } from '~components/ui/form';
import { Input } from '~components/ui/input';
import { useToast } from '~components/ui/toast';
import { SignUpWithEmailSchema } from '~schema/form/sign-up-with-email';
import { useTranslation } from '~translation/client';
import type { SignUpWithEmailProps } from '~types/form/sign-up-with-email';

import { AuthSocial } from '../../auth-social';

/**
 * A component that renders a Sign Up with Email.
 */
export const SignUpForm = () => {
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const { t } = useTranslation('auth');
  const { t: apiTranslate } = useTranslation('api');
  const { toast } = useToast();
  const form = useForm<SignUpWithEmailProps>({
    resolver: zodResolver(SignUpWithEmailSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const handleSignUpWithEmail: SubmitHandler<SignUpWithEmailProps> = async (
    values: SignUpWithEmailProps,
  ) => {
    setIsEmailLoading(true);

    const res = await signUp(values);

    setIsEmailLoading(false);

    if (res.success) {
      form.reset();
    }

    toast({
      variant: res.error ? 'destructive' : 'default',
      title: res.error
        ? apiTranslate('error.sign-up-failed')
        : apiTranslate('success.sign-up-success'),
      description: res.error
        ? apiTranslate(`error.${res.error}`)
        : apiTranslate(`success.${res.success}`),
    });
  };

  return (
    <>
      <Form {...form}>
        <form className='space-y-6' noValidate onSubmit={form.handleSubmit(handleSignUpWithEmail)}>
          <div className='flex flex-col space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItemWithMessage>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isDisabled}
                      placeholder={t('name-placeholder')}
                      type='text'
                    />
                  </FormControl>
                </FormItemWithMessage>
              )}
            />

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
              {t('sign-up.with-email')}
            </Button>
          </div>
        </form>
      </Form>

      <Separator message={t('continue-with')} />

      <AuthSocial isEmailLoading={isEmailLoading} setIsDisabled={setIsDisabled} />
    </>
  );
};
