import axios from 'axios';

const getAll = () => axios.get('http://127.0.0.1:3000/api/v1/tickets');
const create = (data) => axios.post('http://127.0.0.1:3000/api/v1/tickets', { ticket: data });

const remove = (id) => axios.delete(`http://127.0.0.1:3000/api/v1/tickets/${id}`);

const TicketService = {
  getAll,
  create,
  remove,
};

export default TicketService;
