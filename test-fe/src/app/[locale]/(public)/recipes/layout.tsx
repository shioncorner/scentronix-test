'use client';

import { Button, Container } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import { PAGE } from '~constants/page';
import type { MenuType } from '~types/page';

/**
 * Represents the menus of the recipes pages.
 */
const menus: MenuType[] = [
  {
    name: 'Categories',
    href: PAGE.CATEGORIES,
  },
  {
    name: 'Collections',
    href: PAGE.COLLECTIONS,
  },
  {
    name: 'Resources',
    href: PAGE.RESOURCES,
  },
];

/**
 * The props for the Layout component.
 */
type RecipesLayoutProps = {
  children: ReactNode;
};

const RecipesLayout = ({ children }: RecipesLayoutProps) => {
  const pathname = usePathname();

  return (
    <div className='mb-10 flex size-full flex-col'>
      <div className='bg-stone-300'>
        <Container className='!flex flex-row gap-x-4'>
          {menus.map((page) => (
            <Link href={page.href} key={page.name}>
              <Button
                sx={{
                  my: 2,
                  display: 'block',
                  color: 'black',
                  fontWeight: 'bold',
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
        </Container>
      </div>

      <div className='pt-8'>{children}</div>
    </div>
  );
};

export default RecipesLayout;
