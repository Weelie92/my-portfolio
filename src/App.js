import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './FrontPage';
import AboutMe from './AboutMe';
import Header from './Header';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

