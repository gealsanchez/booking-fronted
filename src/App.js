// import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchAutomobiles } from './redux/automobiles';
import { fetchTickets } from './redux/tickets';
import Main from './components/Main';
import Body from './components/Body';
import Ticket from './components/Ticket';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAutomobiles());
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/main" element={<Main />} />
        <Route path="/tickets" element={<Ticket />} />
      </Routes>
    </div>
  );
};

export default App;
