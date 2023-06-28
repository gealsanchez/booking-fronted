import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/ticket.css';
import { fetchAutomobiles } from '../redux/automobiles';
import dots from '../assets/dots.png';

const Ticket = ({ ticket, automobile, onDelete }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAutomobiles());
  }, [dispatch]);

  const handleDelete = () => {
    onDelete(ticket.id);
  };

  if (!automobile) {
    return <>Loading</>;
  }

  return (
    <li className="ticket-card">
      <img className="ticket-image" src={automobile.photo} alt="automobile" />
      <h2 className="ticket-name">
        Dr.
        {' '}
        {automobile.model}
      </h2>
      <img src={dots} alt="dots-bar" className="dots-bar" />
      <p>{ticket.date}</p>
      <p className="ticket-location">
        Based in
        {' '}
        {ticket.location}
      </p>
      <button type="button" onClick={handleDelete} className="ticket-details">Cancel</button>
    </li>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    automobile_id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  automobile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Ticket;
