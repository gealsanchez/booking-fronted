import { configureStore } from '@reduxjs/toolkit';
import automobilesReducer from './automobiles';
import usersReducer from './users';

const store = configureStore({
  reducer: {
    automobiles: automobilesReducer,
    users: usersReducer,
  },
});

export default store;
