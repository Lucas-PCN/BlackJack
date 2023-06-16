import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Game from './pages/Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/rules" element={ <Rules /> } />
        <Route exact path="/game" element={ <Game /> } />
      </Routes>
    </Router>
  );
}

export default App;
