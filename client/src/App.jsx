import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import Showbook from './pages/Showbook';
import Editbook from './pages/Editbook';
import Deletebook from './pages/Deletebook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<Showbook />} />
      <Route path='/books/edit/:id' element={<Editbook />} />
      <Route path='/books/delete/:id' element={<Deletebook />} />
    </Routes>
  );
};

export default App;