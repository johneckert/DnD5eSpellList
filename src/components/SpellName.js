import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faBullseye } from "@fortawesome/free-solid-svg-icons";

const SpellName = props => {
  const ritual = <FontAwesomeIcon icon={faBullseye} />;
  const concentration = <FontAwesomeIcon icon={faLightbulb} />;

  return (
    <div className="name-item">
      <span>{props.spell.name}</span>
      <span>{props.spell.ritual ? ritual : null}</span>
      <span>{props.spell.concentration ? concentration : null}</span>
    </div>
  );
};

export default SpellName;
