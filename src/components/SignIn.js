import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserFromAPI, postUserToAPI } from '../redux/users';
import '../styles/signin.css';

const Login = () => {
  const [inputs, setInputs] = useState({ name: '' });
  const { status, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleChange = (ev) => {
    setInputs((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };
  const handleLoginClick = (ev) => {
    ev.preventDefault();
    dispatch(getUserFromAPI(inputs.name));
  };

  const handleRegisterClick = (ev) => {
    ev.preventDefault();
    dispatch(postUserToAPI(inputs));
  };

  if (status === 'succeed') {
    setTimeout(() => history('/main'));
  }

  return (
    <section className="sign-in-form">
      <h1 className="sign-in-title"> Welcome, please sign in to continue</h1>
      <form onSubmit={handleLoginClick}>
        <div className="sign-in-inputs">
          <label htmlFor="name">
            <input
              className="name-input"
              type="text"
              placeholder="Enter Username"
              value={inputs.title}
              id="name"
              name="name"
              required
              onChange={handleChange}
              minLength={3}
            />
          </label>
          <section className="msg-section">
            <p className="error">{error}</p>
          </section>
          <button className="sign-in-button" type="submit" disabled={status === 'loading' && true}>
            Sign in
          </button>
          <button
            className="sign-out-button"
            type="button"
            onClick={handleRegisterClick}
            disabled={status === 'loading' && true}
          >
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
