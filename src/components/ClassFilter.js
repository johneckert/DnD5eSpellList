import React from "react";

const ClassFilter = props => {
  // const CLASSES = ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"];
  return (
    <nav>
      <img src="owlbear.png" alt="cute owlbear" />
      <select onChange={props.handleCheck} value={props.cl}>
        <option value="All">All</option>
        <option value="Bard">Bard</option>
        <option value="Cleric">Cleric</option>
        <option value="Druid">Druid</option>
        <option value="Paladin">Paladin</option>
        <option value="Ranger">Ranger</option>
        <option value="Sorcerer">Sorcerer</option>
        <option value="Warlock">Warlock</option>
        <option value="Wizard">Wizard</option>
      </select>
    </nav>
  );
};

export default ClassFilter;
