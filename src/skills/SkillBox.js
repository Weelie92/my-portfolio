import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { getColorShade, getSkillColor } from './SkillColors';

function SkillBox({ name, description, skillLevel }) {
  const theme = useTheme();

  return (
    <Paper className="skill-box">
      <Box
        sx={{
          position: 'relative',
          display: 'grid',
          height: '175px',
          width: '150px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          alignContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '5px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(to bottom right, ${getSkillColor(name)}, ${getColorShade(skillLevel)})`,
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              color: '#FFFFFF',
              textShadow: '0px 1px 1px rgba(0, 0, 0, 0.2)',
            }}
            variant="h6"
            component="h2"
            className="skill-name skill-text"
          >
            {name}
          </Typography>
        </Box>
        <Box
          sx={{
            background: '#FFFFFF',
            height: '50%',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Typography variant="body2" className="skill-description skill-text" sx={{ color: '#757575' }}>
            {description}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {[...Array(10)].map((_, index) => (
            <Box
              className="skill-level"
              key={index}
              sx={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                margin: '0 2px',
                backgroundColor: index < Math.floor(skillLevel) ? getColorShade(skillLevel) : '#bdbdbd',
              }}
            />
          ))}
        </Box>
      </Box>
    </Paper>
  );
}

export default SkillBox;
