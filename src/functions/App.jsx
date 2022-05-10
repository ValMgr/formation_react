import React, { useState, useEffect } from "react";

import Trainer from "./Trainer";
import PokemonList from "./PokemonList";
import FilterList from "./FilterList";
import { fetchAll } from "../utils/pokemons.js";
import PokemonTrained from "./PokemonTrained";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [bag, setBag] = useState([]);
  const [filter, setFilter] = useState("all");
  const [types, setTypes] = useState([]);
  const [pokemonFilter, setPokemonFilter] = useState([]);

  useEffect(() => {
    fetchAll().then(
      (pokemons) => {
        setPokemons(pokemons);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    const types = [
      ...new Set(
        pokemons
          .map((pokemon) => pokemon.types.map((type) => type.type.name))
          .flat()
      ),
    ];
    types.push("all");
    setTypes(types);
  }, [pokemons]);

  useEffect(() => {
    filter === "all"
      ? setPokemonFilter(pokemons)
      : setPokemonFilter(
          pokemons.filter((pokemon) =>
            pokemon.types.map((type) => type.type.name).includes(filter)
          )
        );
  }, [pokemons, filter]);

  const capturePokemon = (pokemonName) => {
    const pokemon = pokemons.find((pokemon) => pokemon.name === pokemonName);
    const newPokemon = (
      <PokemonTrained
        key={Date.now()}
        {...pokemon}
        id={Date.now()}
        removeFromBag={removeFromBag}
      />
    );
    setBag((bag) => [...bag, newPokemon]);
  };

  const removeFromBag = (id) => {
    setBag((bag) => bag.filter((pokemon) => parseInt(pokemon.key) !== id));
  };

  return (
    <>
      <Trainer
        name="Valentin"
        address="444 Rue de l'infirmerie, BourgPalette 33400, Kanto"
        bag={bag}
      />
      <h2>Pokedex: </h2>
      <FilterList filters={types} callback={setFilter} />
      <PokemonList Pokemons={pokemonFilter} capturePokemon={capturePokemon} />
    </>
  );
}

export default App;
