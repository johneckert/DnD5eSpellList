import React, { Component } from "react";
import SpellLevel from "./SpellLevel";

class SpellList extends Component {
  render() {
    console.log("List Render", this.props.spells);
    return (
      <div>
        <SpellLevel lvl={"Cantrip"} spells={this.props.spells.cantrip} />
        <SpellLevel lvl={"Level 1"} spells={this.props.spells.one} />
        <SpellLevel lvl={"Level 2"} spells={this.props.spells.two} />
        <SpellLevel lvl={"Level 3"} spells={this.props.spells.three} />
        <SpellLevel lvl={"Level 4"} spells={this.props.spells.four} />
        <SpellLevel lvl={"Level 5"} spells={this.props.spells.five} />
        <SpellLevel lvl={"Level 6"} spells={this.props.spells.six} />
        <SpellLevel lvl={"Level 7"} spells={this.props.spells.seven} />
        <SpellLevel lvl={"Level 8"} spells={this.props.spells.eight} />
        <SpellLevel lvl={"Level 9"} spells={this.props.spells.nine} />
      </div>
    );
  }
}

export default SpellList;
