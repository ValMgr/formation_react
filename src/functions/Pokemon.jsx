import React from "react";

function Pokemon(props) {
    const { name, weight, addToBag } = props;
    const src = props.sprites.front_default;

    return (
      <li className="Pokemon">
        <div className="capture" onClick={() => addToBag(name)}>+</div>
        <div className="name">{name}</div>
        <div className="weight">{Math.round(weight * 0.453592)} Kg</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
}

export default Pokemon;