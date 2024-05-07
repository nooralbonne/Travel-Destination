import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path={'/city/:id'} element={<TourDetails />} /> 
        </Routes>
    </>
  );
}

export default App;
