import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollTrigger, AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Menu } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/andrelie/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <LinkedInIcon sx={{ fontSize: '2rem' }} />
            </a>
            <a href="https://github.com/Weelie92" target="_blank" rel="noopener" aria-label="GitHub">
              <GitHubIcon sx={{ fontSize: '2rem' }} />
            </a>
            <a href="mailto:andrelie92@gmail.com" aria-label="Contact">
              <MailOutlineIcon sx={{ fontSize: '2rem' }} />
            </a>
          </div>

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

        <div className="social-icons-drawer">
          <a href="https://www.linkedin.com/in/andrelie/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <LinkedInIcon sx={{ fontSize: '2rem' }} />
          </a>
          <a href="https://github.com/Weelie92" target="_blank" rel="noopener" aria-label="GitHub">
            <GitHubIcon sx={{ fontSize: '2rem' }} />
          </a>
          <a href="mailto:andrelie92@gmail.com" aria-label="Contact">
            <MailOutlineIcon sx={{ fontSize: '2rem' }} />
          </a>
        </div>
      </Drawer>
    </>
  );
}

export default Header;
