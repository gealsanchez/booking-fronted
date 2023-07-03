import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import logo from '../images/logo.png';
import { logout } from '../redux/users';
import '../styles/style.css';

const SideBar = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    history('/');
  };
  return (

    <nav className="sidebar">
      <div className="sidebar-header">
        {/* <div className="sidebar-header-icon">
        <img className="logo" src={logo} alt="Our logo" />
      </div> */}
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
          <Link to="/tickets" className="link">Ticket</Link>
        </li>
      </ul>
      <button
        type="button"
        className="sign-out-side"
        onClick={handleLogout}
      >
        <span>
          Sign Out
        </span>
      </button>
    </nav>
  );
};
export default SideBar;
