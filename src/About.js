import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import './About.css';

function About() {
  const [isShown, setIsShown] = React.useState(false);

  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <Box
      sx={{ p: 4, transition: 'background-color 0.3s ease-in-out' }}
      className={`about-container ${isShown ? 'about-container--hover' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        About Me
      </Typography>
      <Typography variant="body1" component="p" sx={{ lineHeight: 1.8 }}>
        Hi, my name is [Your Name] and I am a [Your Profession]. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
        pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.
      </Typography>
      <Link to="/about-me">Read more</Link>
    </Box>
  );
}

export default About;
