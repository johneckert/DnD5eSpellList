import React from "react";

const ClassFilter = props => {
  // const CLASSES = ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"];

  return (
    <form>
      <label name="bard">Bard</label>
      <input
        type="checkbox"
        name="bard"
        value="bard"
        checked={props.cl.bard}
        onChange={props.handleCheck}
      />
      <label name="cleric">Cleric</label>
      <input
        type="checkbox"
        name="cleric"
        value="cleric"
        checked={props.cl.cleric}
        onChange={props.handleCheck}
      />
      <label name="druid">Druid</label>
      <input
        type="checkbox"
        name="druid"
        value="druid"
        checked={props.cl.druid}
        onChange={props.handleCheck}
      />
      <label name="paladin">Paladin</label>
      <input
        type="checkbox"
        name="paladin"
        value="paladin"
        checked={props.cl.paladin}
        onChange={props.handleCheck}
      />
      <label name="ranger">Ranger</label>
      <input
        type="checkbox"
        name="ranger"
        value="ranger"
        checked={props.cl.ranger}
        onChange={props.handleCheck}
      />
      <label name="sorcerer">Sorcerer</label>
      <input
        type="checkbox"
        label="Sorcerer"
        name="sorcerer"
        value="sorcerer"
        checked={props.cl.sorcerer}
        onChange={props.handleCheck}
      />
      <label name="warlock">Warlock</label>
      <input
        type="checkbox"
        label="Warlock"
        name="warlock"
        value="warlock"
        checked={props.cl.warlock}
        onChange={props.handleCheck}
      />
      <label name="wizard">Wizard</label>
      <input
        type="checkbox"
        label="Wizard"
        name="wizard"
        value="wizard"
        checked={props.cl.wizard}
        onChange={props.handleCheck}
      />
    </form>
  );
};

export default ClassFilter;
