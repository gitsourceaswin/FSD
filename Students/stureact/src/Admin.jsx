import React, { useState } from 'react';
import axios from 'axios';
import './admin.css';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const addUser = () => {
    // Validate email and password
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password');
      return;
    }

    // Create user object with email and password
    const newUser = { email, password };

    // Add the new user to the users array
    setUsers(prevUsers => [...prevUsers, newUser]);

    // Clear input fields after adding user
    setEmail('');
    setPassword('');
    setError('');
  };

  const saveUsersToServer = () => {
    // Save users to JSON server
    axios.post('http://localhost:3000/users', users)
      .then(res => console.log('Users saved to server:', res.data))
      .catch(err => console.error('Error saving users to server:', err));
  };

  return (
    <div>
      <h1>AUMS Admin</h1>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={addUser}>Add User</button>
      <button onClick={saveUsersToServer}>Save Users</button>
    </div>
  );
}

export default Admin;
