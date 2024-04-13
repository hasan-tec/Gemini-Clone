import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Import auth from firebase.js
import "./SignIn.css"
import { signInWithEmailAndPassword } from 'firebase/auth';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        navigate('/HomePage'); // Redirect to homepage after successful sign-in
    } catch (error) {
        console.error('Error signing in:', error.message);
        // Handle errors appropriately
    }
};

  return (
    <div className="SignIn-container">
      <div className="SignIn-content">
        <h1 className="SignIn-title">Sign In</h1>
        <form className="SignIn-form" onSubmit={handleSignIn}>
          <label className="SignIn-label">
            Email:
            <input type="email" className="SignIn-input" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="SignIn-label">
            Password:
            <input type="password" className="SignIn-input" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit" className="SignIn-button">Sign In</button>
          <p className="SignIn-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
