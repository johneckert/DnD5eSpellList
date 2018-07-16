import React from "react";

const SpellName = props => {
  return (
    <div className="name-item">
      <span>{props.spell.name}</span>
      <span>{props.spell.ritual ? "R" : null}</span>
      <span>{props.spell.concentration ? "C" : null}</span>
    </div>
  );
};

export default SpellName;
