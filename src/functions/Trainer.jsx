import React from "react";

function Trainer(props) {
  const { name, address, bag } = props;

  return (
    <div className="Trainer">
      <header>
        <div className="name">{name}</div>
        <div className="address">{address}</div>
      </header>
      <h3>Owned Pokemons:</h3>
      <ul className="PokemonList">
        {bag}
      </ul>
    </div>
  );
}

export default Trainer;