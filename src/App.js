import React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage/HomePage';
import HeroDetails from './components/HeroDetails/HeroDetails'
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='heroes/:heroId' element={<HeroDetails />} />
      </Routes>
    </div>
  );
}

export default App;
