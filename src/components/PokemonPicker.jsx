import { useState } from 'react';
import useFetch from '../hooks/useFetch';

const SPRITE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'; // small pokemon images from pokeapi

// searchable list of pokemon to pick from
function PokemonPicker({ selected, onSelect }) {
  const [search, setSearch] = useState('');
  const { data, loading, error, retry } = useFetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151'
  );

  if (loading) {
    return <p className="loading">Loading Pokémon list...</p>;
  }

  // list failed to load, let the user retry
  if (error) {
    return (
      <div className="error">
        <p>Couldn't load the Pokémon list. Check your connection and try again.</p>
        <button onClick={retry}>Try again</button>
      </div>
    );
  }

  const matches = data.results.filter((pokemon) =>
    pokemon.name.includes(search.trim().toLowerCase())
  ); // pokemon whose name contains the search

  return (
    <section className="pokemon-picker">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pokémon"
        aria-label="Search Pokémon"
      />
      {/* nothing matches the search */}
      {matches.length === 0 ? (
        <p className="no-match">No Pokémon match "{search}".</p>
      ) : (
        <ul className="pokemon-list">
          {matches.map((pokemon) => {
            const id = pokemon.url.split('/').filter(Boolean).pop(); // pokemon id is the last part of its url
            return (
              <li key={pokemon.name}>
                <button
                  // highlight the selected pokemon
                  className={pokemon.name === selected ? 'selected' : ''}
                  onClick={() => onSelect(pokemon.name)} >
                  <img
                    src={`${SPRITE_URL}/${id}.png`}
                    // empty alt since the name is right below
                    alt=""
                    // sprites are 96px, shown at 64px to fit the grid
                    width="64"
                    height="64"
                    // only load images when scrolled into view
                    loading="lazy"
                  />
                  {pokemon.name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default PokemonPicker;
