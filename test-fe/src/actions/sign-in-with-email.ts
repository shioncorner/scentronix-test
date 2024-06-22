'use server';

import { AuthError } from 'next-auth';
import { headers } from 'next/headers';

import { SETTINGS_CONFIG } from '~app/config/settings';
import { signIn } from '~auth';
import { PAGE } from '~constants/page';
import { getUserByEmail } from '~data/user';
import { getLocaleFromRelativeUrl } from '~lib/utils/locale';
import { getRelativeUrlFromUrl, localizeRelativeUrl } from '~lib/utils/url';
import { SignInWithEmailSchema } from '~schema/form/sign-in-with-email';
import type { APIMessageReturn } from '~types/api';
import type { SignInWithEmailProps } from '~types/form/sign-in-with-email';

const { CURRENT_ROUTE_KEY, CALLBACK_URL_PARAMETER_KEY, FALLBACK_LANGUAGE } = SETTINGS_CONFIG;

/**
 * This function is used to sign in with email and password
 *
 * @param values - The values to sign in with, including email and password
 * @param locale - The locale to use for the error messages
 * @returns The object with the success or error message
 */
export const signInWithEmail = async (values: SignInWithEmailProps): Promise<APIMessageReturn> => {
  const validatedFields = SignInWithEmailSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'invalid-credentials' };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'invalid-credentials' };
  }

  const headersList = headers();
  const currentUrl = headersList.get(CURRENT_ROUTE_KEY);

  if (!currentUrl) {
    throw new Error('Failed to get the current route');
  }

  const relativeUrl = getRelativeUrlFromUrl(currentUrl);
  const locale = getLocaleFromRelativeUrl(relativeUrl) || FALLBACK_LANGUAGE;
  const defaultRedirectUrl = localizeRelativeUrl(PAGE.HOME, locale);
  const redirectTo =
    new URL(currentUrl).searchParams.get(CALLBACK_URL_PARAMETER_KEY) || defaultRedirectUrl;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'invalid-credentials' };
        default:
          return { error: 'something-went-wrong' };
      }
    }

    throw error;
  }

  return { success: 'user-created' };
};
