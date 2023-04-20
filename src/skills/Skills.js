import React from 'react';
import { Box } from '@mui/material';
import SkillBox from './SkillBox';
import { useTransition, animated } from 'react-spring';

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
    skillLevel: 7,
  },
  {
    name: 'Unity',
    description: 'A cross-platform game engine used for creating 2D and 3D games and simulations.',
    skillLevel: 8,
  },
  {
    name: 'AI',
    description: 'The ability of a computer system to perform tasks that normally require human intelligence.',
    skillLevel: 8,
  },
];

function Skills() {
  const transitions = useTransition(skills, {
    keys: (skill) => skill.name,
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    trail: 100, // Add a delay between each skill item for a staggered effect
  });

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '16px',
        paddingBottom: '16px',
        maxWidth: '100%',
        overflowX: 'auto',
        mx: 'auto',
        scrollbarWidth: 'none' /* Hide the scrollbar */,
        '&::-webkit-scrollbar': {
          display: 'none' /* Hide the scrollbar in WebKit browsers */,
        },
      }}
    >
      {transitions((props, skill) => (
        <animated.div style={props}>
          <SkillBox key={skill.name} name={skill.name} description={skill.description} skillLevel={skill.skillLevel} width="150px" height="225px" />
        </animated.div>
      ))}
    </Box>
  );
}

export default Skills;
