import React from 'react';
import './App.css';
import logo from './logo.svg';

function showContent(page) {
  // Define your showContent function logic here
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo} className="rightmost" style={{ height: '40px' }} onClick={() => showContent('profile')} />
        <input type="button" className="header-button" value="Home" onClick={() => showContent('profile')} />
        <input type="button" className="header-button" value="Academics" onClick={() => showContent('academics')} />
        <input type="button" className="header-button" value="Placements" onClick={() => showContent('placements')} />
        <input type="button" className="header-button" value="Fee" onClick={() => showContent('fee')} />
        <input type="button" className="header-button" value="Help Desk" onClick={() => showContent('help_desk')} />
        <div className="dropdown">
          <button className="dropbtn">More</button>
          <div className="dropdown-content">
            <input type="button" className="header-button" value="Course Registration" onClick={() => showContent('course_registration')} />
            <input type="button" className="header-button" value="Feedback" onClick={() => showContent('feedback')} />
            <input type="button" className="header-button" value="Settings" onClick={() => showContent('settings')} />
          </div>
        </div>
        <a href="login.html"><input type="button" className="header-button" value="Sign Out" /></a>
      </header>
    </div>
  );
}

export default App;
