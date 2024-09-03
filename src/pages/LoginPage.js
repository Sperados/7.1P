import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../firebase';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login button clicked");  // Debugging
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential);  // Debugging
        navigate('/');
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
};

export default LoginPage;
