import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function Project({ project }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ maxWidth: 250 }}>
      <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            boxShadow: 1,
            transition: 'box-shadow .2s ease-in-out',
            '&:hover': {
              boxShadow: 5,
            },
            p: 1,
          }}
        >
          <Box sx={{ position: 'relative', pb: '56.25%', overflow: 'hidden' }}>
            <Box
              component="img"
              sx={{
                position: 'absolute',
                objectFit: 'cover',
                height: '100%',
                width: '100%',
              }}
              alt={project.title}
              src={project.imageUrl}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              bgcolor: 'background.paper',
              p: 2,
            }}
          >
            <Typography gutterBottom variant="h5" component="h2" sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
              {project.title}
            </Typography>
            <Typography sx={{ fontSize: '1.25rem' }}>{project.description}</Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              View Project
            </Button>
          </Box>
        </Box>
      </Link>
    </Grid>
  );
}

export default Project;
