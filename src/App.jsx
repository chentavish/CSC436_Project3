import { useState } from 'react';
import Header from './components/Header';
import TrainerForm from './components/TrainerForm';
import PokemonPicker from './components/PokemonPicker';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const [gender, setGender] = useState('male');
  const [feet, setFeet] = useState('5');
  const [inches, setInches] = useState('8');
  const [selected, setSelected] = useState('pikachu');
  const { data: pokemon, loading, error, retry } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${selected}`
  );

  return (
    <div className="app">
      <Header />
      <TrainerForm
        gender={gender}
        feet={feet}
        inches={inches}
        onGenderChange={setGender}
        onFeetChange={setFeet}
        onInchesChange={setInches}
      />
      
      <PokemonPicker selected={selected} onSelect={setSelected} />
      {loading && <p>Loading...</p>}
      {error && (
        <div>
          <p>Couldn't load Pokémon: {error}</p>
          <button onClick={retry}>Try again</button>
        </div>
      )}
      {pokemon && !loading && !error && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
}

export default App;