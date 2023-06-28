import axios from 'axios';

const getAll = () => axios.get('https://booking-ege3.onrender.com/api/v1/tickets');
const create = (data) => axios.post('https://booking-ege3.onrender.com/api/v1/tickets', { ticket: data });

const remove = (id) => axios.delete(`https://booking-ege3.onrender.com/api/v1/tickets/${id}`);

const TicketService = {
  getAll,
  create,
  remove,
};

export default TicketService;
