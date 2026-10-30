import { useState } from 'react';
import Header from './components/Header';
import TrainerForm from './components/TrainerForm';
import SizeCompare from './components/SizeCompare';
import PokemonPicker from './components/PokemonPicker';
import PokemonInfo from './components/PokemonInfo';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const [gender, setGender] = useState('male'); // starts with the male trainer
  const [feet, setFeet] = useState('5'); // default height 5 ft 8 in
  const [inches, setInches] = useState('8');
  const [selected, setSelected] = useState('pikachu'); // pokemon shown first
  const { data: pokemon, loading, error, retry } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${selected}`
); 
  return (
    <div className="app">
      <Header />
      <div className="layout device">
        <div className="form-area">
          <TrainerForm
            gender={gender}
            feet={feet}
            inches={inches}
            onGenderChange={setGender}
            onFeetChange={setFeet}
            onInchesChange={setInches}
          />
        </div>
        <div className="stage-area">
          {loading && <p className="loading">Loading Pokémon...</p>}
          {/* fetch failed, let the user retry */}
          {error && (
            <div className="error">
              <p>Couldn't load this Pokémon. Check your connection and try again.</p>
              <button onClick={retry}>Try again</button>
            </div>
          )}
          {/* only show once the pokemon has loaded */}
          {pokemon && !loading && !error && (
            <>
              <SizeCompare pokemon={pokemon} gender={gender} feet={feet} inches={inches} />
              <PokemonInfo pokemon={pokemon} />
            </>
          )}
        </div>
        <div className="picker-area">
          <PokemonPicker selected={selected} onSelect={setSelected} />
        </div>
      </div>
    </div>
  );
}

export default App;