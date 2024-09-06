import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        email,
        password
      });
      // Handle successful login (e.g., store token, redirect user)
      alert('Login successful');
      console.log(response.data); // Token or user data
    } catch (error) {
      // Handle error response
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
      <a href="/register">Don't have an account? Register here</a>
    </div>
  );
};

export default Login;
