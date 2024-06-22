import { Link } from '~components/shared/link';
import { PAGE } from '~constants/page';
import { serverTranslation } from '~translation/server';
import type { WithLocaleParamsProps } from '~types/params';

import { AuthContainer } from '../auth-container';
import { AuthPrompt } from '../auth-prompt';
import { SignUpForm } from './sign-up-form';

/**
 * The props for the Sign In component.
 */
type SignInProps = WithLocaleParamsProps;

/**
 * A component that renders a Sign Up page.
 */
const SignUp = async ({ params: { locale } }: SignInProps) => {
  const { t } = await serverTranslation(locale, 'auth');

  return (
    <AuthContainer>
      <AuthPrompt prompt={t('sign-up.prompt')} title={t('sign-up.title')} />

      <SignUpForm />

      <p className='px-8 text-center text-muted-foreground'>
        <Link className='underline underline-offset-4' href={PAGE.TERM_AND_PRIVACY} locale={locale}>
          {t('sign-up.suggest')}
        </Link>
      </p>
    </AuthContainer>
  );
};

export default SignUp;
