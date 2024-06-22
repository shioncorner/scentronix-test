'use client';

import DashboardIcon from '@mui/icons-material/Dashboard';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Link from 'next/link';

import { PAGE } from '~constants/page';
import { type MenuType } from '~types/page';

import { AuthActions } from '../auth-actions';
import { UserMenu } from '../user-menu';

type WebMenuProps = {
  menus: MenuType[];
  pathname: string;
  isLoggedIn: boolean;
};

/**
 * A component that renders the WebMenu of the application.
 */
export const WebMenu = ({ menus, pathname, isLoggedIn }: WebMenuProps) => (
  <>
    <Link href={PAGE.HOME}>
      <DashboardIcon
        sx={{ fontSize: 36, display: { xs: 'none', md: 'flex' }, mr: 5, color: 'black' }}
      />
    </Link>

    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex', gap: 20 },
      }}
    >
      {menus.map((page) => (
        <Link href={page.href} key={page.name}>
          <Button
            sx={{
              my: 1,
              display: 'block',
              color: 'black',
              fontWeight: 'bold',
              height: '50px',
              letterSpacing: 1.5,
              borderRadius: 0,
              backgroundColor: 'transparent',
              borderBottom: pathname.includes(page.href)
                ? '2px solid red'
                : '2px solid transparent',
            }}
          >
            {page.name}
          </Button>
        </Link>
      ))}
    </Box>

    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
      }}
    >
      {isLoggedIn ? <UserMenu /> : <AuthActions />}
    </Box>
  </>
);
