// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/" className="header-button">Home</Link></li>
          <li><Link to="/academics" className="header-button">Academics</Link></li>
          <li><Link to="/placements" className="header-button">Placements</Link></li>
          <li><Link to="/fee" className="header-button">Fee</Link></li>
          <li><Link to="/helpdesk" className="header-button">Help Desk</Link></li>
          <li className="dropdown">
            <button className="dropbtn">More</button>
            <div className="dropdown-content">
              <Link to="/course-registration" className="header-button">Course Registration</Link>
              <Link to="/feedback" className="header-button">Feedback</Link>
              <Link to="/settings" className="header-button">Settings</Link>
            </div>
          </li>
          <li><Link to="/login" className="header-button">Sign Out</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
