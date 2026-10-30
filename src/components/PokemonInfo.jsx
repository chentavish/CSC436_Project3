// dot color for each pokemon type
const TYPE_COLORS = {
    normal: '#a8a77a',
    fire: '#ee8130',
    water: '#6390f0',
    electric: '#f7d02c',
    grass: '#7ac74c',
    ice: '#96d9d6',
    fighting: '#c22e28',
    poison: '#a33ea1',
    ground: '#e2bf65',
    flying: '#a98ff3',
    psychic: '#f95587',
    bug: '#a6b91a',
    rock: '#b6a136',
    ghost: '#735797',
    dragon: '#6f35fc',
    dark: '#705746',
    steel: '#b7b7ce',
    fairy: '#d685ad',
  };

  // pokedex style info: number, type and weight
  function PokemonInfo({ pokemon }) {
    const number = String(pokemon.id).padStart(3, '0'); // 25 becomes "025", 3 digits like the pokedex
    const pounds = (pokemon.weight * 0.220462).toFixed(1); // pokeapi uses hectograms, 1 hg = 0.220462 lb

    return (
      <dl className="pokemon-info">
        <div>
          <dt>No.</dt>
          <dd>{number}</dd>
        </div>
        <div>
          <dt>Type</dt>
          <dd className="types">
            {/* one tag per type, some pokemon have 2 */}
            {pokemon.types.map((entry) => (
              <span key={entry.type.name} className="type">
                <span
                  className="type-dot"
                  // color dot for this type
                  style={{ background: TYPE_COLORS[entry.type.name] }}
                />
                {entry.type.name}
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt>Weight</dt>
          <dd>{pounds} lb</dd>
        </div>
      </dl>
    );
  }

  export default PokemonInfo;
