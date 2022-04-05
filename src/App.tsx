import React from 'react';
import ReactDOM from 'react-dom';
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
      <Navigation/>
      <div>
        <Routes>
          <Route path='/' element={<PageHome />}></Route>
          <Route path='/media/:type' element={<PageFilms />}></Route>
          <Route path='/media/:type' element={<PageSeries />}></Route>
          <Route path='/contacts' element={<PageContacts />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share
//caroll.......
//entra no chat do live share


export default App;
