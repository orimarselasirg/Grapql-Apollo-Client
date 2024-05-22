import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Avatar, IconButton, Stack } from '@mui/material';
import { MenuItemComponent } from './MenuItem';
import { TEXT } from '../utils/contans';

const menuItems = [
  {
    to: '/about',
    text: 'Quien soy'
  },
  {
    to: '/contact',
    text: 'Trabajemos juntos'
  },
  {
    to: '/techstack',
    text: 'Tecnologias usadas'
  },
]

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll = ({children, window}: Props) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
              <Typography variant="h6" component="div" fontWeight={600}>
                {TEXT.menuTitle}
              </Typography>
              <Stack direction={'row'} width={'30%'} justifyContent={'space-between'}>
                {
                  menuItems.map((menuItem, index) => (
                    <MenuItemComponent
                      key={index}
                      menuText={menuItem.text}
                      to={menuItem.to}
                    />
                  ))
                }  
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
