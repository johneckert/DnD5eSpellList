import React, { Component } from "react";
import SpellLevel from "./SpellLevel";

class SpellList extends Component {
  render() {
    return (
      <div className="spell-list">
        <SpellLevel lvl={"Cantrip"} spells={this.props.spells.cantrip} clArr={this.props.clArr} />
        <SpellLevel lvl={"Level 1"} spells={this.props.spells.one} clArr={this.props.clArr} />
        <SpellLevel lvl={"Level 2"} spells={this.props.spells.two} clArr={this.props.clArr} />
        <SpellLevel lvl={"Level 3"} spells={this.props.spells.three} clArr={this.props.clArr} />
        <SpellLevel lvl={"Level 4"} spells={this.props.spells.four} clArr={this.props.clArr} />
        <SpellLevel lvl={"Level 5"} spells={this.props.spells.five} clArr={this.props.clArr} />
        <SpellLevel lvl={"Level 6"} spells={this.props.spells.six} clArr={this.props.clArr} />
        <SpellLevel lvl={"Level 7"} spells={this.props.spells.seven} clArr={this.props.clArr} />
        <SpellLevel lvl={"Level 8"} spells={this.props.spells.eight} clArr={this.props.clArr} />
        <SpellLevel lvl={"Level 9"} spells={this.props.spells.nine} clArr={this.props.clArr} />
      </div>
    );
  }
}

export default SpellList;
