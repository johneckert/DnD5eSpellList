import React, { Component } from "react";
import SpellCard from "./SpellCard";

class SpellLevel extends Component {
  checkClass = classArr => {
    let isRelevant = false;
    classArr.forEach(spellCl => {
      while (!isRelevant) {
        if (this.props.clArr.includes(spellCl)) {
          isRelevant = true;
        }
      }
    });
    return isRelevant;
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
