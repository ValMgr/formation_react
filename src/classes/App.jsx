import React from "react";

import Trainer from "./Trainer";
import PokemonList from "./PokemonList";
import Filter from "./Filter";
import fetchPokemons from "../utils/fetchPokemon";
import PokemonTrained from "./PokemonTrained";

export default class App extends React.Component {
  constructor() {
    super();

    this.initialPokemon = ["eevee", "vaporeon", "jolteon", "flareon"];

    this.state = {
      pokemons: [],
      typeFilter: "all",
      bag: [],
    };
  }

  async componentDidMount() {
    const pokemons = await fetchPokemons();
    const bag = pokemons
      .filter((pokemon) => this.initialPokemon.includes(pokemon.name))
      .map((pokemon, i) => (
        <PokemonTrained
          key={Date.now() + i}
          {...pokemon}
          id={Date.now() + i}
          releasePokemon={this.releasePokemon}
        />
      ));
    this.setState({ pokemons: pokemons, bag: bag });
  }

  releasePokemon = (id) => {
    this.setState({
      bag: this.state.bag.filter((pokemon) => parseInt(pokemon.key) !== id),
    });
  };

  capturePokemon = (pokemonName) => {
    const pokemon = this.state.pokemons.find((p) => p.name === pokemonName);
    const newPokemon = (
      <PokemonTrained
        key={Date.now()}
        {...pokemon}
        id={Date.now()}
        releasePokemon={this.releasePokemon}
      />
    );
    this.setState({ bag: [...this.state.bag, newPokemon] });
  };

  setCurrentTypeFilter = (filter) => {
    this.setState({ typeFilter: filter });
  };

  getPokemonsTypes = () => {
    const types = [
      ...new Set(
        this.state.pokemons
          .map((pokemon) => pokemon.types.map((type) => type.type.name))
          .flat()
      ),
    ];
    types.push("all");
    return types;
  };

  filterPokemons = () => {
    return this.state.typeFilter === "all"
      ? this.state.pokemons
      : this.state.pokemons.filter((pokemon) =>
          pokemon.types
            .map((type) => type.type.name)
            .flat()
            .includes(this.state.typeFilter)
        );
  };

  render() {
    const types = this.getPokemonsTypes();
    const PokemonsList = this.filterPokemons();

    const typeList = types.map((type, i) => {
      return (
        <Filter
          key={type}
          filter={type}
          isActive={type === this.state.typeFilter}
          callback={() => this.setCurrentTypeFilter(type)}
        />
      );
    });

    return (
      <>
        <Trainer
          name="Valentin"
          address="444 Rue de l'infirmerie, BourgPalette 33400, Kanto"
          pokemons={this.state.bag}
        />
        <h2>Pokedex: </h2>
        <ul className="filters">{typeList}</ul>
        <PokemonList
          Pokemons={PokemonsList}
          capturePokemon={this.capturePokemon}
        />
      </>
    );
  }
}
