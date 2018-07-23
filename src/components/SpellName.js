import React from "react";

const SpellName = props => {
  const isActive = props.active ? "active" : "";

  return (
    <div className="name-item cat">
      <span className={isActive}>{props.spell.name}</span>
      {props.spell.ritual ? (
        <img className="icon" src="./ritual.png" alt="ritual" />
      ) : (
        <img className="icon" src="./blank.png" alt="concentration" />
      )}
      {props.spell.concentration ? (
        <img className="icon" src="./concentration.png" alt="concentration" />
      ) : (
        <img className="icon" src="./blank.png" alt="concentration" />
      )}
    </div>
  );
};

export default SpellName;
