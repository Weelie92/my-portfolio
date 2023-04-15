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
        Hi, I'm [Your Name]
      </Typography>
      <img src="/images/tempheadshot.png" alt="A temporary headshot of me" className="aboutme-image" />

      <section className="aboutme-section">
        <Typography variant="h5" component="h2" className="aboutme-section-heading">
          Childhood
        </Typography>
        <Typography variant="body1" component="p" className="aboutme-section-text">
          I was born and raised in [Your Hometown]. Growing up, I was always interested in [Your Childhood Interests]. I have many fond memories of [Your
          Childhood Experiences].
        </Typography>
      </section>

      <section className="aboutme-section">
        <Typography variant="h5" component="h2" className="aboutme-section-heading">
          Previous Work
        </Typography>
        <Typography variant="body1" component="p" className="aboutme-section-text">
          Prior to my current career in [Your Current Career], I worked as [Your Previous Work Experience]. During this time, I learned [Something You Learned]
          and gained valuable experience in [Your Previous Work Skills].
        </Typography>
      </section>

      <section className="aboutme-section">
        <Typography variant="h5" component="h2" className="aboutme-section-heading">
          Family
        </Typography>
        <Typography variant="body1" component="p" className="aboutme-section-text">
          Family is very important to me. I have [Number of Siblings] siblings, [Your Relationship with Your Parents], and [Other Family Members]. They have
          been a constant source of support and inspiration throughout my life.
        </Typography>
      </section>

      <section className="aboutme-section">
        <Typography variant="h5" component="h2" className="aboutme-section-heading">
          Education
        </Typography>
        <Typography variant="body1" component="p" className="aboutme-section-text">
          I graduated from [Your Alma Mater] with a degree in [Your Field of Study]. Since then, I have continued to learn and grow by [Something You Have Done
          to Continue Your Education or Skills Development].
        </Typography>
      </section>

      <section className="aboutme-section">
        <Typography variant="h5" component="h2" className="aboutme-section-heading">
          Future Plans
        </Typography>
        <Typography variant="body1" component="p" className="aboutme-section-text">
          Looking to the future, I hope to [Your Future Goals or Aspirations]. I believe that [Your Personal Beliefs or Values], and I strive to live my life in
          a way that reflects these values.
        </Typography>
      </section>
    </Box>
  );
}

export default AboutMe;
