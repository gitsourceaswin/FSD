// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes
import Academics from './Academics';
import CourseRegistration from './CourseRegistration';
import Fee from './Fee';
import Feedback from './Feedback';
import Header from './Header';
import HelpDesk from './HelpDesk';
import Home from './Home';
import Login from './Login'; // assuming you have a Login component
import Placements from './Placements';
import Settings from './Settings';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} /> {/* Use 'element' prop instead of 'component' */}
          <Route path="/academics" element={<Academics />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/fee" element={<Fee />} />
          <Route path="/helpdesk" element={<HelpDesk />} />
          <Route path="/course-registration" element={<CourseRegistration />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
