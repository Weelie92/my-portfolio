import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      My App &copy; {new Date().getFullYear()}
      <br />
      <Link href="https://www.linkedin.com/in/andrelie/" target="_blank" rel="noopener">
        <LinkedInIcon sx={{ fontSize: '1.5rem', mx: 1 }} />
      </Link>
      <Link href="https://github.com/Weelie92" target="_blank" rel="noopener">
        <GitHubIcon sx={{ fontSize: '1.5rem', mx: 1 }} />
      </Link>
    </Typography>
  );
}

export default Footer;
