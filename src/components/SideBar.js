import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const SideBar = () => (
  <nav className="sidebar">
    <div className="sidebar-header">
      <div className="sidebar-header-icon">
        <img className="logo" src={logo} alt="Our logo" />
      </div>
    </div>
    <ul className="sidebar-list">
      <li className="sidebar-item">
        <Link to="/main" className="link">AUTOMOBILES</Link>
      </li>
      <li className="sidebar-item">
        <Link to="/add_automobile" className="link">ADD AUTOMOBILE</Link>
      </li>
      <li className="sidebar-item">
        <Link to="/automobiles/delete" className="link">DELETE AUTOMOBILE</Link>
      </li>
      <li className="sidebar-item">
        <Link to="/reserve" className="link">RESERVE</Link>
      </li>
    </ul>
    <Link to="/signin" className="link sign-out-side">Sign Out</Link>
  </nav>
);

export default SideBar;
