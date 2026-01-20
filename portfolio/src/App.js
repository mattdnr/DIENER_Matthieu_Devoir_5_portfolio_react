import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import AppPortfolio from './pages/portfolio';
import AppHeader from './components/header';
import AppFooter from './components/footer';





function App() {
  return (
    <Router>
      <AppHeader />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/portfolio" element={<AppPortfolio />} />
      </Routes>

      <AppFooter />
    </Router>
  );
}

export default App;
