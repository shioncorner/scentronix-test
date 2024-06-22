import { Link } from '~components/shared/link';
import { PAGE } from '~constants/page';
import { serverTranslation } from '~translation/server';
import type { WithLocaleParamsProps } from '~types/params';

import { AuthContainer } from '../auth-container';
import { AuthPrompt } from '../auth-prompt';
import { SignInForm } from './sign-in-form';

/**
 * The props for the Sign In component.
 */
type SignInProps = WithLocaleParamsProps;

/**
 * A component that renders a Sign In page.
 */
const SignIn = async ({ params: { locale } }: SignInProps) => {
  const { t } = await serverTranslation(locale, 'auth');

  return (
    <AuthContainer>
      <AuthPrompt prompt={t('sign-in.prompt')} title={t('sign-in.title')} />

      <SignInForm />

      <p className='px-8 text-center text-muted-foreground'>
        <Link className='underline underline-offset-4' href={PAGE.SIGN_UP} locale={locale}>
          {t('sign-in.suggest')}
        </Link>
      </p>
    </AuthContainer>
  );
};

export default SignIn;
