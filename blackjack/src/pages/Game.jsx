import React, { useState, useEffect } from 'react';

function Game() {
  const [name, setName] = useState("");

  useEffect(() => {
    // Recupera o nome do armazenamento local, se existir
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(name);
    }
  }, []);

  return (
    <div>
      <h1>Bem vindo ao jogo, ${name}</h1>
    </div>
  )
}

export default Game;