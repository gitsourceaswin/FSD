// App.js
import React, { useState } from 'react';
import './App.css';
import MainPage from './MainPage';
import Login from './Login';
import Admin from './Admin';

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (userData) => {
    // Perform authentication logic here, set user state accordingly
    setUser(userData);
  };
  return (
    <div>
      {user ? (
        user.isAdmin? <Admin/> :
        <MainPage/>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
} 

export default App;
