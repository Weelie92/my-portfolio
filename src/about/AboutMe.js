import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import './AboutMe.css';

function AboutMe() {
  return (
    <Box className="aboutme-container">
      <Typography variant="h4" component="h1" className="aboutme-heading">
        Hi, I'm André Lie
      </Typography>
      <img src="/images/tempheadshot.png" alt="A temporary headshot of me" className="aboutme-image" />

      <section className="aboutme-section">
        <Typography variant="h5" component="h2" className="aboutme-section-heading">
          Childhood
        </Typography>
        <Typography variant="body1" component="p" className="aboutme-section-text">
          I was born and raised in Mandal. Growing up, I was always interested in technology. It wasnt uncommon to find me taking apart my toys to see how they
          work. I also loved the outdoors and spent a lot of time hiking and exploring the woods near my home. I have always been a curious person, and I always
          had a passion for learning.
        </Typography>
      </section>

      <section className="aboutme-section">
        <Typography variant="h5" component="h2" className="aboutme-section-heading">
          Previous Work
        </Typography>
        <Typography variant="body1" component="p" className="aboutme-section-text">
          I started working as an adult as a Painter, my first two years of work was as a trainee, i then worked as a service painter for 4 aditional years. I
          then quit my work due to poor working conditions and started my own company in 2017. After 2 years of working as a self employed painter, i decided to
          go back to school and study Multimedietechnology and Design as a full time student. I am currently in my 3rd year of study.
        </Typography>
      </section>

      <section className="aboutme-section">
        <Typography variant="h5" component="h2" className="aboutme-section-heading">
          Family
        </Typography>
        <Typography variant="body1" component="p" className="aboutme-section-text">
          Family is important to me. I currently have a lovely girlfriend and daughter, with the addition of multiple pets, such as a dog, 3 cats and a macaw.
        </Typography>
      </section>

      <section className="aboutme-section">
        <Typography variant="h5" component="h2" className="aboutme-section-heading">
          Education
        </Typography>
        <Typography variant="body1" component="p" className="aboutme-section-text">
          I graduated with as a carpenter in 2010, and finished my painter education in 2011. I finished the studies i needed in 2019 like Norwegian, math,
          science, etc. in 2020 i started my road to a bachelor in multimedia technology and design.
        </Typography>
      </section>

      <section className="aboutme-section">
        <Typography variant="h5" component="h2" className="aboutme-section-heading">
          Future Plans
        </Typography>
        <Typography variant="body1" component="p" className="aboutme-section-text">
          Looking to the Future, I hope to continue to learn and grow as a developer. I am currently looking for a job as a developer.
        </Typography>
      </section>
    </Box>
  );
}

export default AboutMe;
