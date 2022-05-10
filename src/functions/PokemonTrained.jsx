import React, { useState, useEffect } from "react";

function PokemonTrained(props) {
  const { id, name, removeFromBag } = props;
  const [experience, setExperience] = useState(0);
  const [surname, setSurname] = useState("");

  const src = props.sprites.front_default;
  const xp = experience % 500;
  const level = Math.floor(experience / 500) + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setExperience((experience) => experience + 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <li
      className="Pokemon TrainedPokemon"
      onMouseMove={() => setExperience(experience + 1)}
    >
      <input type="text" value={surname} onChange={(e) => setSurname(e.target.value) } />
      <div className="liberate" onClick={() => removeFromBag(id)}>
        x
      </div>
      <div className="name">{ surname ? surname : name } </div>
      <div className="experience">{xp}XP</div>
      <div className="level">LvL: {level}</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default PokemonTrained;
