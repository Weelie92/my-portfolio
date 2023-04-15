import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  const email = 'andrelie92@gmail.com'; // replace with your email

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
      My App &copy; {new Date().getFullYear()}
      <br />
      <Link href="https://www.linkedin.com/in/andrelie/" target="_blank" rel="noopener">
        <LinkedInIcon sx={{ fontSize: '1.5rem', mx: 1 }} />
      </Link>
      <Link href="https://github.com/Weelie92" target="_blank" rel="noopener">
        <GitHubIcon sx={{ fontSize: '1.5rem', mx: 1 }} />
      </Link>
      <Link onClick={handleClick} sx={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', mx: 1 }}>
        <MailOutlineIcon sx={{ fontSize: '1.5rem' }} />
        <Typography variant="body2" sx={{ ml: 1 }}>
          Contact
        </Typography>
      </Link>
    </Typography>
  );
}

export default Footer;
