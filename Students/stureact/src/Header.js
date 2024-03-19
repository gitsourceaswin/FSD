// Header.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(getCurrentTabName());

  // Function to get the name of the current tab based on the URL
  function getCurrentTabName() {
    const path = location.pathname;
    switch (path) {
      case '/academics':
        return 'Academics';
      case '/placements':
        return 'Placements';
      case '/fee':
        return 'Fee';
      case '/helpdesk':
        return 'Help Desk';
      case '/course-registration':
        return 'Course Registration';
      case '/feedback':
        return 'Feedback';
      case '/settings':
        return 'Settings';
      case '/login':
        return 'Sign Out';
      default:
        return 'Home';
    }
  }

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to handle tab click
  const handleTabClick = () => {
    setSidebarOpen(false); // Close the sidebar
  };

  // Update the current tab name when the location changes
  useEffect(() => {
    setCurrentTab(getCurrentTabName());
  }, [location]);

  return (
    <header className="header">
      <nav>
        <div className="menu-icon" onClick={toggleSidebar}>
          <p>{currentTab}</p> {/* Display the current tab name */}
        </div>
        <ul className={sidebarOpen ? "nav-list active" : "nav-list"}>
          <li><Link to="/" className="header-button" onClick={handleTabClick}>Home</Link></li>
          <li><Link to="/academics" className="header-button" onClick={handleTabClick}>Academics</Link></li>
          <li><Link to="/placements" className="header-button" onClick={handleTabClick}>Placements</Link></li>
          <li><Link to="/fee" className="header-button" onClick={handleTabClick}>Fee</Link></li>
          <li><Link to="/helpdesk" className="header-button" onClick={handleTabClick}>Help Desk</Link></li>
          <li className="dropdown">
            <button className="dropbtn">More</button>
            <div className="dropdown-content">
              <Link to="/course-registration" className="header-button" onClick={handleTabClick}>Course Registration</Link>
              <Link to="/feedback" className="header-button" onClick={handleTabClick}>Feedback</Link>
              <Link to="/settings" className="header-button" onClick={handleTabClick}>Settings</Link>
            </div>
          </li>
          <li><Link to="/login" className="header-button" onClick={handleTabClick}>Sign Out</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
