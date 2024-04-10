import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calender from './calender/calender';
import Home from './page/home';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/calender" element={<Calender />} />
    </Routes>
  );
};

export default RoutesComponent;