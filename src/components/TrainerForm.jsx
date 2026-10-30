function TrainerForm({ gender, feet, inches, onGenderChange, onFeetChange, onInchesChange }) {
    return (
      <section className="trainer-form">
        <h2>Your character</h2>
        <fieldset>
          <legend>Gender</legend>
          <label>
            <input
              type="radio"
              name="gender"
              checked={gender === 'male'}
              onChange={() => onGenderChange('male')}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              checked={gender === 'female'}
              onChange={() => onGenderChange('female')}
            />
            Female
          </label>
        </fieldset>
  
        <fieldset>
          <legend>Your height</legend>
          <label>
            <input
              type="number"
              min="1"
              max="8"
              value={feet}
              onChange={(e) => onFeetChange(e.target.value)}
            />
            ft
          </label>
          <label>
            <input
              type="number"
              min="0"
              max="11"
              value={inches}
              onChange={(e) => onInchesChange(e.target.value)}
            />
            in
          </label>
        </fieldset>
      </section>
    );
  }
  
  export default TrainerForm;