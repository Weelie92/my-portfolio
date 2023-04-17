import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Project({ project }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ maxWidth: 250 }}>
      <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease-out',
            transform: 'translateY(0)',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Box sx={{ position: 'relative', pb: '56.25%', overflow: 'hidden', borderRadius: '8px' }}>
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
              borderRadius: '0 0 8px 8px',
            }}
          >
            <Typography gutterBottom variant="h5" component="h2" sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
              {project.title}
            </Typography>
            <Typography sx={{ fontSize: '1.25rem', flex: 1 }}>{project.description}</Typography>
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
