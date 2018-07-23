import React from "react";

const ClassFilter = props => {
  // const CLASSES = ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"];

  return (
    <nav>
      <label name="All">All</label>
      <input
        type="radio"
        name="All"
        value="All"
        checked={props.cl === "All"}
        onChange={props.handleCheck}
      />
      <label name="Bard">Bard</label>
      <input
        type="radio"
        name="Bard"
        value="Bard"
        checked={props.cl === "Bard"}
        onChange={props.handleCheck}
      />
      <label name="Cleric">Cleric</label>
      <input
        type="radio"
        name="Cleric"
        value="Cleric"
        checked={props.cl === "Cleric"}
        onChange={props.handleCheck}
      />
      <label name="Druid">Druid</label>
      <input
        type="radio"
        name="Druid"
        value="Druid"
        checked={props.cl === "Druid"}
        onChange={props.handleCheck}
      />
      <label name="Paladin">Paladin</label>
      <input
        type="radio"
        name="Paladin"
        value="Paladin"
        checked={props.cl === "Paladin"}
        onChange={props.handleCheck}
      />
      <label name="Ranger">Ranger</label>
      <input
        type="radio"
        name="Ranger"
        value="Ranger"
        checked={props.cl === "Ranger"}
        onChange={props.handleCheck}
      />
      <label name="Sorcerer">Sorcerer</label>
      <input
        type="radio"
        label="Sorcerer"
        name="Sorcerer"
        value="Sorcerer"
        checked={props.cl === "Sorcerer"}
        onChange={props.handleCheck}
      />
      <label name="Warlock">Warlock</label>
      <input
        type="radio"
        label="Warlock"
        name="Warlock"
        value="Warlock"
        checked={props.cl === "Warlock"}
        onChange={props.handleCheck}
      />
      <label name="Wizard">Wizard</label>
      <input
        type="radio"
        label="Wizard"
        name="Wizard"
        value="Wizard"
        checked={props.cl === "Wizard"}
        onChange={props.handleCheck}
      />
    </nav>
  );
};

export default ClassFilter;
