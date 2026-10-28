import useFetch from '../hooks/useFetch';

function PokemonPicker({ selected, onSelect }) {
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

  return (
    <ul className="pokemon-list">
      {data.results.map((pokemon) => (
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
  );
}

export default PokemonPicker;