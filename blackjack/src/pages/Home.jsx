import React, { useState, useEffect } from 'react';
import ButtonRules from '../components/ButtonRules';
import ButtonPlayGame from '../components/ButtonPlayGame';

function Home() {
  const [name, setName] = useState("");

  const handleChange = ({ target }) => {
    setName(target.value);
  }

  useEffect(() => {
    // Armazena o nome no armazenamento local
    localStorage.setItem('name', name);
  }, [name]);

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
        value={ name }
        onChange={ handleChange }
      />
      <ButtonPlayGame />
      <ButtonRules />
    </div>
    </main>
  );
}

export default Home;
