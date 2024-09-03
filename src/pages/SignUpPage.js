import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword, updateProfile } from '../firebase';
import './SignUpPage.css';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign Up button clicked");  // Debugging

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User created:", userCredential);  // Debugging
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => {
            console.log("Profile updated");
            navigate('/login');
          })
          .catch((error) => {
            console.error("Profile update failed", error);
          });
      })
      .catch((error) => {
        console.error("Sign up failed", error);
      });
  };

  return (
    <div className="signup-container">
      <h2>Create a DEV@Deakin Account</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default SignUpPage;
