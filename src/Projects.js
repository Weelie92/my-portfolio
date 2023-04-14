import * as React from 'react';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import './Projects.css';

const projects = [
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis vitae pretium porttitor, nunc libero vulputate magna, et rutrum quam magna a sapien. Donec quis fermentum lectus, quis vestibulum ex.',
    image: 'https://via.placeholder.com/400x200/FFD54F/000000',
    link: 'https://example.com/project-1',
  },
  {
    name: 'Project 2',
    description:
      'Nullam vitae turpis at purus laoreet lobortis. Maecenas a consequat nulla, quis hendrerit elit. Sed malesuada nisl nec malesuada faucibus. Maecenas vehicula orci eu ex ultrices dignissim.',
    image: 'https://via.placeholder.com/400x200/4FC3F7/000000',
    link: 'https://example.com/project-2',
  },
  {
    name: 'Project 3',
    description:
      'Cras ac nisi sit amet lectus consectetur congue in id enim. Vestibulum non odio non nisl sollicitudin tincidunt vitae vel magna. Donec at nibh ac purus suscipit pharetra nec eu quam.',
    image: 'https://via.placeholder.com/400x200/81C784/000000',
    link: 'https://example.com/project-3',
  },
];

function Projects() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {projects.map((project, index) => (
        <Card key={index} className="project-card" sx={{ maxWidth: 345 }}>
          <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer">
            <CardMedia component="img" height="140" image={project.image} alt={project.name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href={project.link} target="_blank" rel="noopener noreferrer" size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default Projects;
