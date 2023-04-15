import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { getColorShade } from './SkillColors';

function SkillBox({ name, description, skillLevel }) {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: 2,
        width: '100%',
        height: '150px',
        [theme.breakpoints.up('sm')]: {
          width: '50%',
        },
        [theme.breakpoints.up('md')]: {
          width: '33.33%',
        },
        [theme.breakpoints.up('lg')]: {
          width: '25%',
        },
      }}
      className="skill-box"
    >
      <Box>
        <Box>
          <Typography variant="h6" component="h2" className="skill-name skill-text">
            {name}
          </Typography>
          <Typography variant="body2" className="skill-description skill-text" sx={{ color: '#757575' }}>
            {description}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {[...Array(10)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '2px',
              margin: '0 2px',
              backgroundColor: index < Math.floor(skillLevel) ? getColorShade(skillLevel) : '#bdbdbd',
            }}
          />
        ))}
      </Box>
    </Paper>
  );
}

export default SkillBox;
