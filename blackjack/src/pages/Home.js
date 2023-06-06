function Home() {
  return (
    <main>
    <div>
      <h1>BlackJack</h1>
    </div>
    <div>
      <input
        type="text"
        placeholder="Insira seu nome"
        name="name"
      />
      <button
        type="button"
      >
        Jogar
      </button>
      <button
        type="button"
      >
        Ver regras
      </button>
    </div>
    </main>
  );
}

export default Home;
