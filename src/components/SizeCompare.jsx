// trainer drawing, sized by the height we pass in
import Trainer from './Trainer';

const STAGE_HEIGHT = 320; // height in px of the taller figure
const INCHES_PER_DECIMETER = 3.937; // pokeapi uses decimeters, 1 dm = 3.937 in

// turns inches into the format "5 ft 7 in"
function formatHeight(totalInches) {
  const rounded = Math.round(totalInches); // round to a whole inch
  return `${Math.floor(rounded / 12)} ft ${rounded % 12} in`;
}

// shows you and the pokemon side by side at real scale
function SizeCompare({ pokemon, gender, feet, inches }) {
  const trainerInches = Number(feet) * 12 + Number(inches); // your height in inches
  const pokemonInches = pokemon.height * INCHES_PER_DECIMETER; // pokemon height in inches

  // no height entered, or outside 1 ft 0 in to 8 ft 11 in
  if (Number(feet) < 1 || Number(feet) > 8 || Number(inches) < 0 || Number(inches) > 11) {
    return <p className="empty">Enter a height between 1 ft 0 in and 8 ft 11 in.</p>;
  }

  const tallest = Math.max(trainerInches, pokemonInches); // the taller one fills the stage
  const trainerPx = (trainerInches / tallest) * STAGE_HEIGHT; // your height in px
  const pokemonPx = (pokemonInches / tallest) * STAGE_HEIGHT; // pokemon height in px
  const footPx = (12 / tallest) * STAGE_HEIGHT; // space between the 1 foot lines

  return (
    <section className="size-compare" style={{ '--foot': `${footPx}px` }}>
      {/* character size */}
      <figure className="figure">
        <figcaption>
          <strong>You</strong>
          <span>{formatHeight(trainerInches)}</span>
        </figcaption>
        <Trainer gender={gender} heightPx={trainerPx} />
      </figure>
      {/* pokemon size */}
      <figure className="figure">
        <figcaption>
          <strong>{pokemon.name}</strong>
          <span>{formatHeight(pokemonInches)}</span>
        </figcaption>
        <img
          // pokemon artwork from pokeapi
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          // only set height so it doesn't stretch
          style={{ height: pokemonPx }}
        />
      </figure>
    </section>
  );
}

export default SizeCompare;