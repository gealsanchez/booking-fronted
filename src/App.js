// import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchAutomobiles } from './redux/automobiles';
import Main from './components/Main';
import Body from './components/Body';
import AutomobileDetails from './pages/AutomobileDetails';
import AddAutomobile from './components/AddAutomobile';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAutomobiles());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/main" element={<Main />} />
        <Route path="/automobiles/:automobileId" element={<AutomobileDetails />} />
        <Route path="/add_automobile" element={<AddAutomobile />} />
      </Routes>
    </div>
  );
};

export default App;
