import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/register', {
        name,
        email,
        password
      });
      // Handle successful registration (e.g., display success message)
      alert('Registration successful');
      console.log(response.data); // Confirmation data
    } catch (error) {
      // Handle error response
      setErrorMessage('Registration failed');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit">Register</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
      <a href="/login">Already have an account? Login here</a>
    </div>
  );
};

export default Register;
