import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from '../frontpage/FrontPage';
import AboutMe from '../about/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

