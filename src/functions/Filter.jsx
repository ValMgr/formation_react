import React from "react";

function Filter(props) {
  const { filter, isActive, callback } = props;
  const style = isActive ? "btn-secondary" : "btn-primary";
  const css = "btn " + style;

  return (
    <button className={css} onClick={() => callback(filter)}>
      {filter}
    </button>
  );
}

export default Filter;