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
      const response = await axios.post('http://127.0.0.1:3000/api/v1/users', {
        user: {
          name,
        },
      });
      console.log('Sign up successful:', response.data);
      // Update message state with the success message from response
      // setMessage(response.data.http_status.message || '');
      navigate('/signin');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.http_status) {
        // Update message state with the error message from response
        setMessage(error.response.data.http_status.errors || 'Sign up failed');
      } else {
        // Handle other types of errors
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
