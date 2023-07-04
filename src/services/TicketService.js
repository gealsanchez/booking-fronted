import axios from 'axios';

const getAll = () => axios.get('https://bookingapi-mstz.onrender.com/api/v1/tickets');
const create = (data) => axios.post('https://bookingapi-mstz.onrender.com/api/v1/tickets', { ticket: data });

const remove = (id) => axios.delete(`https://bookingapi-mstz.onrender.com/api/v1/${id}`);

const TicketService = {
  getAll,
  create,
  remove,
};

export default TicketService;
