import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css';

const SignUpComponent = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post('http://127.0.0.1:3000/api/v1/users', {
        user: {
          name,
        },
      });
      navigate('/signin');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.http_status) {
        setMessage(error.response.data.http_status.errors || 'Sign up failed');
      } else {
        setMessage('Sign up failed');
      }
    }
  };
  return (
    <div className="sign-up-form">
      <h1 className="sign-up-title"> Welcome, please sign up or sign in to continue</h1>
      <div className="sign-up-inputs">
        <p>{message}</p>
        <input className="name-input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="session-buttons">
        <button className="sign-up-button" type="button" onClick={handleSignUp}>Sign Up</button>
        <Link to="/signin" className="sign-in-btn">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpComponent;
