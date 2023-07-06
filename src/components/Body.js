/* eslint-disable jsx-quotes */
import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => (
  <header className="header">
    <span className="header-title">Book a ticket with your prefer automobile</span>
    <div className="header-automobile-btn-space">
      <span className="header-automobile-btn">
        <Link to="/signin" className="link-sign">Sign In</Link>
      </span>
      <span className="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span className="header-automobile-btn-signup">
        <Link to="/signup" className="link-sign">Sign Up</Link>
      </span>
    </div>
  </header>
);

export default Body;
