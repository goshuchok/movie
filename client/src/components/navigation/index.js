import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Button,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link to="settings" component={RouterLink}>
          <ListItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={['lg', 'xl']}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: 'white', flexGrow: 1 }}
            >
              Movies recommendation
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Button
              component={RouterLink}
              to="settings"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Settings
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;
