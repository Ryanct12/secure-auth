import React from 'react';
import './App.css';

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to Secure Auth</h2>
      <p>This is a secure login and registration system.</p>
      <a href="/login">Go to Login</a>
      <a href="/register">Go to Register</a>
    </div>
  );
};

export default Home;
