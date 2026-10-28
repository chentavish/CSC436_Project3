import { useState } from 'react';
import useFetch from '../hooks/useFetch';

function PokemonPicker({ selected, onSelect }) {
  const [search, setSearch] = useState('');
  const { data, loading, error, retry } = useFetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151'
  );

  if (loading) {
    return <p>Loading Pokémon list...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Couldn't load the Pokémon list: {error}</p>
        <button onClick={retry}>Try again</button>
      </div>
    );
  }

  const matches = data.results.filter((pokemon) =>
    pokemon.name.includes(search.trim().toLowerCase())
  );

  return (
    <section className="pokemon-picker">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pokémon"
        aria-label="Search Pokémon"
      />
      {matches.length === 0 ? (
        <p>No Pokémon match "{search}".</p>
      ) : (
        <ul className="pokemon-list">
          {matches.map((pokemon) => (
            <li key={pokemon.name}>
              <button
                className={pokemon.name === selected ? 'selected' : ''}
                onClick={() => onSelect(pokemon.name)}
              >
                {pokemon.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default PokemonPicker;