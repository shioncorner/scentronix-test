'use client';

import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useState } from 'react';

import { PAGE } from '~constants/page';
import { type MenuType } from '~types/page';

type MobileMenuProps = {
  menus: MenuType[];
  pathname: string;
};

/**
 * A component that renders the MobileMenu of the application.
 */
export const MobileMenu = ({ menus, pathname }: MobileMenuProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          aria-controls='menu-appbar'
          aria-haspopup='true'
          aria-label='account of current user'
          color='inherit'
          onClick={handleOpenNavMenu}
          size='large'
        >
          <MenuIcon sx={{ fontSize: 30, color: 'black' }} />
        </IconButton>

        <Menu
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          id='menu-appbar'
          keepMounted
          onClose={handleCloseNavMenu}
          open={Boolean(anchorElNav)}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {menus.map((page) => (
            <Link href={page.href} key={page.name}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  sx={{
                    color: 'black',
                    fontWeight: 'bold',
                    letterSpacing: 1.5,
                    borderRadius: 0,
                    backgroundColor: 'transparent',
                    borderBottom: pathname.includes(page.href)
                      ? '2px solid red'
                      : '2px solid transparent',
                  }}
                  textAlign='center'
                >
                  {page.name}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>

      <Link href={PAGE.HOME}>
        <DashboardIcon
          sx={{ fontSize: 30, display: { xs: 'flex', md: 'none' }, mr: 1, color: 'black' }}
        />
      </Link>
    </>
  );
};
