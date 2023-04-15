import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollTrigger, AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu } from '@mui/icons-material';

import './Header.css';

function ElevationScroll(props) {
  const { children } = props;

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    listener: (window) => {
      const scrollPos = window.pageYOffset;
      const scrollingDown = scrollPos > prevScrollPos;
      setPrevScrollPos(scrollPos);
      return scrollingDown;
    },
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position="static">
          <Toolbar>
            <div>
              <div className="menu-button" onClick={toggleDrawer(true)}>
                <Menu />
              </div>
            </div>
            <div className="header-button-desktop">
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about-me">
                About Me
              </Button>
              <Button color="inherit" component={Link} to="/projects">
                Projects
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={toggleDrawer(false)} component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)} component={Link} to="/about-me">
            <ListItemText primary="About Me" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)} component={Link} to="/projects">
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)} component={Link} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Header;
