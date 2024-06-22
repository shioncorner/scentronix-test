'use client';

import { useTranslation } from '~translation/client';

/**
 * A component that displays an error message.
 */
const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <div className='h-screen flex-col space-y-6 font-medium flex-center'>
      <div>{t('unknown-error')}</div>
    </div>
  );
};

export default ErrorPage;
