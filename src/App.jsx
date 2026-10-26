import Header from './components/Header';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const { data: pokemon, loading, error, retry } = useFetch(
    'https://pokeapi.co/api/v2/pokemon/pikachu'
  );

  return (
    <div className="app">
      <Header />
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