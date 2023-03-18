import React from 'react';
import './App.scss';
import { Route, Routes, } from 'react-router-dom';
import Articles from './pages/Articles';
import Header from './components/Header';
import Article from './pages/Article';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Articles />} />
        <Route path='/article/:id' element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
