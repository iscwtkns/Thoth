import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Dashboard from './pages/dashboard';
import Learn from './pages/learn';

// Main starting function
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<LandingPage/>} />
        <Route path = "/dashboard" element = {<Dashboard/>} />
        <Route path = "/learn" element = {<Learn/>} />
      </Routes>
    </Router>
  );
}
export default App;



