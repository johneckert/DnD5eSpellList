import React from "react";

const SelectOrder = props => {
  return (
    <select defaultValue="alpha" onChange={props.handleSort}>
      <option value="alpha">Alphabetical</option>
      <option value="level">By Level</option>
    </select>
  );
};

export default SelectOrder;
