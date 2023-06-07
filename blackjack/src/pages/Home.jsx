import React from 'react';
import ButtonRules from '../components/ButtonRules';
import ButtonPlayGame from '../components/ButtonPlayGame';

function Home() {
  return (
    <main>
    <div>
      <h1>BlackJack</h1>
    </div>

    <div>
      <label for="name">
        Insira seu nome: 
      </label>
      
      <input
        type="text"
        id="name"
        name="name"
      />
      <ButtonPlayGame />
      <ButtonRules />
    </div>
    </main>
  );
}

export default Home;
