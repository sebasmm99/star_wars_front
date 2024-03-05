import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href='/home'>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton href='/favorites'>
      <ListItemIcon>
        <FavoriteIcon />
      </ListItemIcon>
      <ListItemText primary="Favorites" />
    </ListItemButton>
    <ListItemButton href='/users'>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="User Management" />
    </ListItemButton>
  </React.Fragment>
);
