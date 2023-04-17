import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import Project from './Project';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2',
    description: 'A placeholder project about a mobile app that helps you track your daily water intake',
    status: 'in_progress',
  },
  {
    id: 2,
    title: 'Project 2',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2',
    description: 'A placeholder project about a web-based game that teaches kids basic programming concepts',
    status: 'in_progress',
  },
  {
    id: 3,
    title: 'Project 3',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2',
    description: 'A placeholder project about a platform that connects volunteers with local charity events',
    status: 'in_progress',
  },
];

function Projects() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Grid container spacing={2} sx={{ justifyContent: 'center', maxWidth: '1200px', width: '100%', mx: 'auto', p: 2 }}>
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
