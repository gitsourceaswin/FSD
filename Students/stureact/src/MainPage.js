// MainPage.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Academics from './Academics';
import Fee from './Fee';
import Feedback from './Feedback';
import Header from './Header';
import HelpDesk from './HelpDesk';
import Home from './Home';
import Login from './Login';
import './MainPage.css';
import Placements from './Placements';
import Settings from './Settings';

function MainPage() {
  return (
    <Router>
      <div className="MainPage">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/fee" element={<Fee />} />
          <Route path="/helpdesk" element={<HelpDesk />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainPage;
