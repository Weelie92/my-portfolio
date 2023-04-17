import React from 'react';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import CV from '../cv/CV';
import Footer from '../app/components/Footer';
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
    </Box>
  );
}

export default FrontPage;
