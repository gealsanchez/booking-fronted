import { configureStore } from '@reduxjs/toolkit';
import automobilesReducer from './automobiles';
import ticketsReducer from './tickets';
import usersReducer from './users';

const store = configureStore({
  reducer: {
    automobiles: automobilesReducer,
    tickets: ticketsReducer,
    users: usersReducer,
  },
});

export default store;
