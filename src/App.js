import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Footer';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import CV from './CV'; // import the CV component
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

