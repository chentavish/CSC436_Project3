import { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <div className="app">
      <Header />
      {pokemon ? (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;