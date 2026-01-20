import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Services from './pages/Services/services';
import Portfolio from './pages/Portfolio/portfolio';
import Contact from './pages/Contact/contact';
import MentionsLegales from './pages/Mentions Legales/mentions_legales';
import AppHeader from './components/header';
import AppFooter from './components/footer';


function App() {
  return (
    <Router>
      <AppHeader />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>

      <AppFooter />
    </Router>
  );
}

export default App;
