import React from "react";

const ClassFilter = props => {
  // const CLASSES = ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"];

  return (
    <nav>
      <div>
        <label name="All">All</label>
        <input
          type="radio"
          name="All"
          value="All"
          checked={props.cl === "All"}
          onChange={props.handleCheck}
        />
      </div>
      <div>
        <label name="Bard">Bard</label>
        <input
          type="radio"
          name="Bard"
          value="Bard"
          checked={props.cl === "Bard"}
          onChange={props.handleCheck}
        />
      </div>
      <div>
        <label name="Cleric">Cleric</label>
        <input
          type="radio"
          name="Cleric"
          value="Cleric"
          checked={props.cl === "Cleric"}
          onChange={props.handleCheck}
        />
      </div>
      <div>
        <label name="Druid">Druid</label>
        <input
          type="radio"
          name="Druid"
          value="Druid"
          checked={props.cl === "Druid"}
          onChange={props.handleCheck}
        />
      </div>
      <div>
        <label name="Paladin">Paladin</label>
        <input
          type="radio"
          name="Paladin"
          value="Paladin"
          checked={props.cl === "Paladin"}
          onChange={props.handleCheck}
        />
      </div>
      <div>
        <label name="Ranger">Ranger</label>
        <input
          type="radio"
          name="Ranger"
          value="Ranger"
          checked={props.cl === "Ranger"}
          onChange={props.handleCheck}
        />
      </div>
      <div>
        <label name="Sorcerer">Sorcerer</label>
        <input
          type="radio"
          label="Sorcerer"
          name="Sorcerer"
          value="Sorcerer"
          checked={props.cl === "Sorcerer"}
          onChange={props.handleCheck}
        />
      </div>
      <div>
        <label name="Warlock">Warlock</label>
        <input
          type="radio"
          label="Warlock"
          name="Warlock"
          value="Warlock"
          checked={props.cl === "Warlock"}
          onChange={props.handleCheck}
        />
      </div>
      <div>
        <label name="Wizard">Wizard</label>
        <input
          type="radio"
          label="Wizard"
          name="Wizard"
          value="Wizard"
          checked={props.cl === "Wizard"}
          onChange={props.handleCheck}
        />
      </div>
    </nav>
  );
};

export default ClassFilter;
