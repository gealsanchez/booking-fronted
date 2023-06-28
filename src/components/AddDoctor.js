import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; //
import { createAutomobile } from '../redux/automobiles';
import '../styles/add-automobile.css';

const Addautomobile = () => {
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [location, setLocation] = useState('');
  const [rate, setRate] = useState('');
  const [photo, setPhoto] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const response = await dispatch(createAutomobile({
        model,
        year,
        location,
        rate,
        photo,
      }));
      console.log(response);
      // Update message state with the success message from response
      setMessage('Added automobile successfully' || '');
    } catch (error) {
      console.error('Add automobile failed:', error);
      setMessage(error.message || '');
    }
  };

  return (
    <div className="add-automobile-form">
      <p>{message}</p>
      <p className="add-automobile-title">Add an automobile</p>
      <div className="inputs">
        <input className="name-automobile-input" type="text" placeholder="Model" value={name} onChange={(e) => setModel(e.target.value)} />
        <input className="year-input" type="text" placeholder="prd-year" value={year} onChange={(e) => setYear(e.target.value)} />
        <input className="location-input" type="text" placeholder="City" value={location} onChange={(e) => setLocation(e.target.value)} />
        <input className="rate-input" type="text" placeholder="Charging rate $" value={rate} onChange={(e) => setRate(e.target.value)} />
        <input className="photo-input" type="text" placeholder="Photo Link" value={photo} onChange={(e) => setPhoto(e.target.value)} />
        <button className="add-automobile-button" type="button" onClick={handleSubmit}>Add automobile</button>
        <Link to="/main" className="link back-automobiles">Back to automobiles</Link>
      </div>
    </div>
  );
};

export default Addautomobile;
