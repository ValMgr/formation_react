import React from "react";

import Pokemon from "./Pokemon";

export default class PokemonList extends React.Component {
  render() {
    const { Pokemons, capturePokemon } = this.props;
    const list = Pokemons.map((pokemon) => (
      <Pokemon key={pokemon.id} {...pokemon} addToBag={capturePokemon} />
    ));

    return <ul className="PokemonList">{list}</ul>;
  }
}
