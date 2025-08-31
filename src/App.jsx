import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import FooterPage from './components/FooterPage'; // Corrected import
import './styles.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <FooterPage />
    </Router>
  );
}

export default App;