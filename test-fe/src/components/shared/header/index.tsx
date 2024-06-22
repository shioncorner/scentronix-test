'use client';

import { AppBar, Toolbar } from '@mui/material';
import Container from '@mui/material/Container';
import { usePathname } from 'next/navigation';

import { PAGE } from '~constants/page';
import { type MenuType } from '~types/page';

import { MobileMenu } from './mobile-menu';
import { WebMenu } from './web-menu';

/**
 * Represents the menus of the application.
 */
const menus: MenuType[] = [
  {
    name: 'Shop',
    href: PAGE.SHOP,
  },
  {
    name: 'Recipes',
    href: PAGE.RECIPES,
  },
  {
    name: 'Learn',
    href: PAGE.LEARN,
  },
  {
    name: 'About',
    href: PAGE.ABOUT,
  },
  {
    name: 'Blog',
    href: PAGE.BLOG,
  },
];

type HeaderProps = {
  isLoggedIn: boolean;
};

/**
 * A component that renders the Header of the application.
 */
export const Header = ({ isLoggedIn }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header className='z-header flex w-full items-center bg-background'>
      <Container sx={{ padding: '20px 0' }}>
        <AppBar elevation={0} position='static' style={{ backgroundColor: 'white' }}>
          <Toolbar disableGutters>
            <WebMenu isLoggedIn={isLoggedIn} menus={menus} pathname={pathname} />

            <MobileMenu menus={menus} pathname={pathname} />
          </Toolbar>
        </AppBar>
      </Container>
    </header>
  );
};
