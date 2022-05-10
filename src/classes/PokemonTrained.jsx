import Pokemon from "./Pokemon";

export default class PokemonTrained extends Pokemon {
  constructor() {
    super();

    this.state = {
      xp: 0,
    };

    this.addExperience = this.addExperience.bind(this);
  }

  componentDidMount(){
    this.experienceInterval = setInterval(this.addExperience, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.experienceInterval);
  }

  addExperience(e, xp = 10) {
    this.setState({ xp: this.state.xp + xp });
  }

  render() {
    const { id, name, releasePokemon } = this.props;
    const xp = this.state.xp % 500;
    const level = Math.floor(this.state.xp / 500) + 1;
    const src = this.props.sprites.front_default;

    return (
      <li
        className="Pokemon TrainedPokemon"
        onClick={this.displayName} onMouseMove={this.addExperience}
      >
        <div className="liberate" onClick={() => releasePokemon(id)}>x</div>
        <div className="name">{name}</div>
        <div className="level">Lv: {level}</div>
        <div className="experience">{xp}/500 XP</div>
        {/* <div className="weight">{Math.round(weight * 0.453592)} Kg</div> */}
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}
