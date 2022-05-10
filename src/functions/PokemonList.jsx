import React from "react";

import Pokemon from "./Pokemon";

function PokemonList(props) {
  const { Pokemons, capturePokemon } = props;
  const list = Pokemons.map((pokemon) => (
    <Pokemon key={pokemon.id} {...pokemon} addToBag={capturePokemon} />
  ));

  return <ul className="PokemonList">{list}</ul>;
}

export default PokemonList;