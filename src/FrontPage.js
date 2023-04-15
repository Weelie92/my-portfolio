import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import CV from './CV';
import Footer from './Footer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
  },
});

function FrontPage() {
  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </Box>
  );
}

export default FrontPage;
