import React, { useState,useEffect  } from 'react';
import './auth_style.css';
import axios from 'axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    // Fetch user credentials from the local JSON server
    axios.get('http://localhost:3000/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  const encryptPassword = (password) => {
    // Implement your encryption logic here (e.g., Base64 encoding)
    return btoa(password); // Base64 encoding for simplicity
  };

  // Function to handle login button click
  const handleLogin = () => {
    // Validate email and password
    if (!password.trim()&&!email.trim()) {
      setError('Please enter your password and email');
      return;
    }
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return false;
}

// Encrypt the input password for comparison
const encryptedPassword = encryptPassword(password);

// Check if email starts with "admin@"
if (email.trim().toLowerCase().startsWith("admin@")) {
  const usr = {
    isAdmin:  true
  };
  // // Redirect to admin page
  // window.location.href = "/admin";
  onLogin(usr);
  return
}
else{
// Find the user in the users array
const user = users.find((user) => user.email === email && user.password === encryptedPassword);
if (!user) {
  setError('Invalid email or password');
  return;
}
 const usr = {
  isAdmin:  false
};
onLogin(usr);
}


    setError('');
    // Add your login logic here
    // For now, let's navigate to the homepage
   
  };

  return (
    <body id="logbody">
    <div className="container">
      <div className="design">
        <div className="pill-1 rotate-45"></div>
        <div className="pill-2 rotate-45"></div>
        <div className="pill-3 rotate-45"></div>
        <div className="pill-4 rotate-45"></div>
      </div>
      <div className="login">
        <img className="logo" src="logo-colored.svg" alt="" />
        <h1 className="head">AUMS</h1>
        <h2 className="title">Login</h2>
        <div className="text-input">
          <i className="ri-user-fill"></i>
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input
            type={passwordVisible ? "text" : "password"}
            id="passwordInput"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="togglePassword" onClick={togglePasswordVisibility}>
            <i className={passwordVisible ? "ri-eye-off-fill" : "ri-eye-fill"} style={{border: "none"}}></i>
          </button>
        </div>
        {error && <div className="error">{error}</div>}
        <button className="login-btn" onClick={handleLogin}>
          LOGIN
        </button>
        <a href="#" className="forgot">Forgot Username/Password?</a>
        <div className="create">
          {/* <a href="signup.html">Create Your Account</a>
          <i className="ri-arrow-right-fill"></i> */}
        </div>
      </div>
      </div>
    </body>
  );
}

export default Login;
