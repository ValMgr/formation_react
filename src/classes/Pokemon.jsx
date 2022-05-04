import React, { Component } from "react";

export default class Pokemon extends Component {
  constructor() {
    super();
    this.displayName = this.displayName.bind(this);
  }

  displayName(e) {
    console.log(this.props.name);
  }

  render() {
    const { name, weight, addToBag } = this.props;
    const src = this.props.sprites.front_default;

    return (
      <li className="Pokemon" onClick={this.displayName}>
        <div className="capture" onClick={() => addToBag(name)}>+</div>
        <div className="name">{name}</div>
        <div className="weight">{Math.round(weight * 0.453592)} Kg</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}
