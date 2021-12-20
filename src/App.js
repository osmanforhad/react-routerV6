import React from 'react';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <h1 className='text-center'>React Router V6 Exaple</h1>

      
      <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
      </Routes>
      </Router>
    </>
  );
};

export default App;
