import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const GET = 'booking_api/automobilesReducer/GET';
const ADD = 'booking_api/automobilesReducer/ADD';
const DELETE = 'booking_api/automobilesReducer/DELETE';

// Reducer
const automobilesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET}/fulfilled`: {
      const allAutomobiles = action.payload.data.map((automobile) => ({
        id: automobile.id,
        model: automobile.model,
        photo: automobile.photo,
        location: automobile.location,
        year: automobile.year,
        rate: automobile.rate,

      }));
      return allAutomobiles;
    }
    case `${ADD}/fulfilled`: {
      const newAutomobile = {
        model: action.payload.model,
        photo: action.payload.photo,
        year: action.payload.year,
        location: action.payload.location,
        rate: action.payload.rate,
      };
      return [...state, newAutomobile];
    }
    case `${DELETE}/fulfilled`: {
      const { id } = action.payload;
      const updatedAutomobiles = state.filter((automobile) => automobile.id !== id);
      return updatedAutomobiles;
    }
    default: {
      return state;
    }
  }
};

// Action creator
export const getAutomobiles = (payload) => ({
  type: GET,
  payload,
});

export const addAutomobile = (payload) => ({
  type: ADD,
  payload,
});

export const removeAutomobile = (payload) => ({
  type: DELETE,
  payload,
});

// API
export const fetchAutomobiles = createAsyncThunk(GET, async () => {
  const response = await fetch('https://booking-ege3.onrender.com/api/v1/automobiles');
  const data = await response.json();
  return { data };
});

export const createAutomobile = createAsyncThunk(ADD, async (automobileData) => {
  const response = await axios.post('https://booking-ege3.onrender.com/api/v1/automobiles', { automobile: automobileData });
  const dispatch = useDispatch();
  dispatch(fetchAutomobiles());
  return response.data;
});

export const deleteAutomobile = createAsyncThunk(DELETE, async (id) => {
  await axios.delete(`https://booking-ege3.onrender.com/api/v1/automobiles/${id}`);
  return { id }; // Return the deleted automobile's id for updating the state
});

export default automobilesReducer;
