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
      sx={{
        p: 4,
        transition: 'background-color 0.3s ease-in-out',
        backgroundColor: '#F3F3F3',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(0,0,0,0.6)',
          opacity: isShown ? '1' : '0',
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', textAlign: 'center', zIndex: 1 }}>
          Click to Learn More
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          About Me
        </Typography>
        <Typography variant="body1" component="p" sx={{ lineHeight: 1.8 }}>
          Hi, I'm André, a Multimedietechnology and Design student at the University of Agder. I'm passionate about programming and technology, and have honed
          my skills in HTML, CSS, and JavaScript. Additionally, I have experience using various medie tools such as Photoshop and Premiere. I've also taught
          myself Unity and C#, exploring game development and further enhancing my programming abilities. My interest in AI has led me to discover its potential
          as a tool for teaching and developing. I'm set to graduate in summer 2023 and excited to apply my skills to create innovative tech solutions.
        </Typography>
        <Link to="/about-me" style={{ textDecoration: 'none', display: 'block', marginTop: '20px' }}>
          <Button variant="contained" sx={{ bgcolor: '#00BFFF', color: '#FFFFFF', '&:hover': { bgcolor: '#00A0DC' } }}>
            Read More
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default About;
