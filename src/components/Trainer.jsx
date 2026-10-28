const SPRITES = {
    male: '/trainers/lucas.png',
    female: '/trainers/dawn.png',
  };
  
  function Trainer({ gender, heightPx }) {
    return (
      <img
        className="trainer"
        src={SPRITES[gender]}
        alt="Your character"
        style={{ height: heightPx }}
      />
    );
  }
  
  export default Trainer;