import { Button } from '@mui/material';
import Link from 'next/link';

import { PAGE } from '~constants/page';

/**
 * A component that renders sign-in and sign-up buttons.
 */
export const AuthActions = () => (
  <nav className='flex items-center divide-x-2 font-bold  uppercase tracking-[1.5] text-black *:px-4'>
    <Link href={PAGE.SIGN_IN}>
      <Button
        sx={{
          display: 'block',
          color: 'black',
          fontWeight: 'bold',
          height: '50px',
          letterSpacing: 1.5,
          borderRadius: 0,
          backgroundColor: 'transparent',
        }}
      >
        SIGN IN
      </Button>
    </Link>

    <Link href={PAGE.SIGN_UP}>
      <Button
        sx={{
          display: 'block',
          color: 'black',
          fontWeight: 'bold',
          height: '50px',
          letterSpacing: 1.5,
          borderRadius: 0,
          backgroundColor: 'transparent',
        }}
      >
        SIGN UP
      </Button>
    </Link>
  </nav>
);
