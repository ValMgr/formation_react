import React from "react";

import Filter from "./Filter";

function FilterList(props) {
  const { filters, callback } = props;

  return (
    <div className="FilterList">
      {filters.map((filter) => (
        <Filter key={filter} filter={filter} callback={callback} />
      ))}
    </div>
  );
}

export default FilterList;