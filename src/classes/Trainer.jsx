import React from "react";

import PokemonTrained from "./PokemonTrained";

export default class Trainer extends React.Component {
  render() {
    const { name, address, pokemons } = this.props;
    

    return (
      <div className="Trainer">
        <header>
          <div className="name">{name}</div>
          <div className="address">{address}</div>
        </header>
        <h3>Owned Pokemons:</h3>
        <ul className="PokemonList">{pokemons}</ul>
      </div>
    );
  }
}
