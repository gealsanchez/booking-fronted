import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import '../styles/main.css';
import dots from '../assets/dots.png';
import left from '../assets/arrow-left.jpg';
import right from '../assets/arrow-right.png';
import { fetchAutomobiles } from '../redux/automobiles';
import Header from './Header';

const Main = () => {
  const automobiles = useSelector((state) => state.automobiles);
  const automobilesContainerRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAutomobiles());
  }, [dispatch]);

  const scrollLeft = () => {
    if (automobilesContainerRef.current) {
      automobilesContainerRef.current.scrollLeft -= automobilesContainerRef.current.offsetWidth / 3;
    }
  };
  const scrollRight = () => {
    if (automobilesContainerRef.current) {
      automobilesContainerRef.current.scrollLeft += automobilesContainerRef.current.offsetWidth / 3;
    }
  };
  return (
    <div className="main-bar">
      <Header />
      <SideBar />
      <div className="main">
        <h1 className="automobile-list-title">BROWSE AUTOMOBILES</h1>
        <p className="automobiles-list-subtitle">Select an automobile to see details or reserve</p>
        <div className="dots-wrapper">
          <img src={dots} alt="dots-bar" className="dots-bar" />
        </div>
        {automobiles.length === 0 ? ( // Add conditional rendering for empty automobiles array
          <p className="no-automobiles-message"><Link to="/add_automobile" className="link">Add a new automobile </Link></p> // Render the message
        ) : (
          <div className="automobiles-container" ref={automobilesContainerRef}>
            {automobiles.map((automobile) => (
              <div key={`${automobile.id}_${automobile.model}`} className="automobile-card">
                <img className="automobile-image" src={automobile.photo} alt="automobile" />
                <h2 className="automobile-name">
                  {automobile.model}
                </h2>
                <img src={dots} alt="dots-bar" className="dots-bar" />
                <p className="automobile-year">
                  Manyfac.D
                  {' '}
                  {automobile.year}
                </p>
                <p className="automobile-location">
                  Based in
                  {' '}
                  {automobile.location}
                </p>
                <Link to={`/automobiles/${automobile.id}`} className="automobile-details-link">
                  <button className="automobile-details" type="button">details</button>
                </Link>
              </div>
            ))}
          </div>
        )}
        <div className="arrow-buttons-container">
          <button className="arrow-button arrow-left" onClick={scrollLeft} type="button">
            <img src={left} alt="arrow-left" className="arrow-left" />
          </button>
          <button className="arrow-button arrow-right" onClick={scrollRight} type="button">
            <img src={right} alt="arrow-right" className="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
