import React from "react";

const SpellName = props => {
  const ritual = props.spell.ritual ? <img src="./ritual.png" alt="ritual" /> : null;
  const concentration = props.spell.concentration ? (
    <img src="./concentration.png" alt="concentration" />
  ) : null;

  return (
    <div className="name-item">
      <span>{props.spell.name}</span>
      <span className="icon">{ritual}</span>
      <span className="icon">{concentration}</span>
    </div>
  );
};

export default SpellName;
