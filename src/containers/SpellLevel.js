import React, { Component } from "react";
import SpellCard from "./SpellCard";

class SpellLevel extends Component {
  checkClass = classArr => {
    if (this.props.cl === "All") {
      return true;
    }

    if (classArr.includes(this.props.cl)) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="spell-level">
        <h3>{this.props.lvl}</h3>
        <ul>
          {this.props.spells.map(spell => {
            if (this.checkClass(spell.classes)) {
              return <SpellCard key={spell.id} spell={spell} />;
            }
            return null;
          })}
        </ul>
      </div>
    );
  }
}

export default SpellLevel;
