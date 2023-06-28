import { configureStore } from '@reduxjs/toolkit';
import automobilesReducer from './automobiles';

const store = configureStore({
  reducer: {
    automobiles: automobilesReducer,
  },
});

export default store;
