import React from 'react';
import { Box } from '@mui/material';
import SkillBox from './SkillBox';

const skills = [
  {
    name: 'HTML',
    description: 'The standard markup language for creating web pages and web applications.',
    skillLevel: 8,
  },
  {
    name: 'CSS',
    description: 'Used to add styles to HTML elements and create visually appealing web pages.',
    skillLevel: 7,
  },
  {
    name: 'JavaScript',
    description: 'A scripting language used to create interactive web pages and web applications.',
    skillLevel: 9,
  },
  {
    name: 'React',
    description: 'A JavaScript library used for building user interfaces and single-page applications.',
    skillLevel: 7,
  },
  {
    name: 'C#',
    description: 'A modern, general-purpose programming language developed by Microsoft.',
    skillLevel: 6,
  },
  {
    name: 'Unity',
    description: 'A cross-platform game engine used for creating 2D and 3D games and simulations.',
    skillLevel: 6,
  },
  {
    name: 'AI',
    description: 'The ability of a computer system to perform tasks that normally require human intelligence.',
    skillLevel: 5,
  },
];

function Skills() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '16px',
        maxWidth: '1000px', // Set max width to prevent overflow
        overflowX: 'auto', // Add a horizontal scrollbar for smaller screens
        mx: 'auto', // Center horizontally
      }}
    >
      {skills.map((skill) => (
        <SkillBox key={skill.name} name={skill.name} description={skill.description} skillLevel={skill.skillLevel} />
      ))}
    </Box>
  );
}

export default Skills;
