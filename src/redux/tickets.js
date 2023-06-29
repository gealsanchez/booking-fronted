import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import TicketService from '../services/TicketService';
import { fetchAutomobiles } from './automobiles';

const initialState = {
  tickets: [],
  loading: false,
  error: null,
};

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async () => {
    const response = await TicketService.getAll();
    const { data } = response;
    return data.tickets;
  },
);

export const addTicket = createAsyncThunk(
  'tickets/addTicket',
  async (ticketData) => {
    const response = await TicketService.create(ticketData);
    const dispatch = useDispatch();
    await dispatch(fetchTickets());
    await dispatch(fetchAutomobiles());
    return response;
  },
);

export const deleteTicket = (ticketId) => ({
  type: 'DELETE_TICKET',
  payload: ticketId,
});

export const removeTicket = createAsyncThunk(
  'tickets/removeTicket',
  async (ticketId) => {
    const response = await TicketService.remove(ticketId);
    return response;
  },
);

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchTickets.pending.type:
      return {
        ...state,
        loading: true,
      };
    case fetchTickets.fulfilled.type:
      return {
        ...state,
        loading: false,
        tickets: [...action.payload],
      };
    case fetchTickets.rejected.type:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'DELETE_TICKET':
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket.id !== action.payload,
        ),
      };
    case addTicket.fulfilled.type:
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };

    case removeTicket.fulfilled.type:
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export const getLoadingState = (state) => state.tickets.loading;
export const getTickets = (state) => state.tickets.tickets;
export const getError = (state) => state.tickets.error;

export default ticketsReducer;
