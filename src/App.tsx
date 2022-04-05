import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import PageHome from './pages/Home';
import PageFilms from './pages/Films';
import PageSeries from './pages/Series';
import PageContacts from './pages/Contacts';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className='wrap'>
      <Navigation/>
      <div className="container">
        <Routes>
          <Route path='/' element={<PageHome />}></Route>
          <Route path='/media/films' element={<PageFilms />}></Route>
          <Route path='/media/series' element={<PageSeries />}></Route>
          <Route path='/contacts' element={<PageContacts />}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
