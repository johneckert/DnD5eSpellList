import React, { Component } from "react";
import SpellCard from "./SpellCard";

class SpellLevel extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.lvl}</h3>
        <ul>
          {this.props.spells.map(spell => {
            return <SpellCard key={spell.id} spell={spell} />;
          })}
        </ul>
      </div>
    );
  }
}

export default SpellLevel;
