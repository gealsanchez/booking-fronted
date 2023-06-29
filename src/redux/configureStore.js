import { configureStore } from '@reduxjs/toolkit';
import automobilesReducer from './automobiles';
import ticketsReducer from './tickets';

const store = configureStore({
  reducer: {
    automobiles: automobilesReducer,
    tickets: ticketsReducer,
  },
});

export default store;
