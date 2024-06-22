import { Icons } from '~components/shared/icons';
import { Link } from '~components/shared/link';
import { PAGE } from '~constants/page';
import type { Language } from '~types/language';

/**
 * The props for the Logo component.
 */
type LogoProps = {
  locale: Language;
};

/**
 * A component that renders the logo of the application.
 */
export const Logo = ({ locale }: LogoProps) => (
  <Link href={PAGE.HOME} locale={locale}>
    <Icons.Logo className='size-6 cursor-pointer' />
  </Link>
);
