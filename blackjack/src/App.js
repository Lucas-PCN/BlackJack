import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Game from './pages/Game';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={ () => <Home /> } />
      <Route exact path="/rules" render={ () => <Rules /> } />
      <Route exact path="/game" render={ () => <Game /> } />
    </BrowserRouter>
  );
}

export default App;
