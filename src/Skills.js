import React, { createRef } from 'react';

import { useRef, useEffect } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import HtmlIcon from '@mui/icons-material/Html';

import './Skills.css';

const skills = [
  {
    name: 'HTML',
    icon: 'fab fa-html5',
    proficiency: 80,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
  },
  {
    name: 'CSS',
    icon: 'fab fa-css3-alt',
    proficiency: 70,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
  },
  {
    name: 'JavaScript',
    icon: 'fab fa-js-square',
    proficiency: 90,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
  },
  {
    name: 'C#',
    icon: 'devicon-csharp-plain',
    proficiency: 75,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
  },
  {
    name: 'Unity',
    icon: 'devicon-unity-plain',
    proficiency: 70,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
  },
  {
    name: 'AI',
    icon: 'fas fa-brain',
    proficiency: 60,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
  },
];

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skill = skills.find((skill) => skill.name === entry.target.dataset.skill);
      const progressBar = entry.target.querySelector('.skill-progress');
      progressBar.style.width = `${skill.proficiency}%`;
      observer.unobserve(entry.target);
    }
  });
}

function Skills() {
  return (
    <Box className="skills-boxes">
      {skills.map((skill) => (
        <Paper key={skill.name} sx={{ p: 2 }} className="skill-box">
          <div>
            <Typography className="skill-name">{skill.name}</Typography>
            <Typography className="skill-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo
              lectus, ac blandit elit tincidunt id.
            </Typography>
          </div>
          <LinearProgress variant="determinate" value={skill.proficiency} className="skill-progress" />
        </Paper>
      ))}
    </Box>
  );
}

export default Skills;
