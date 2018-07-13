import React, { Component } from "react";
import SpellCard from "./SpellCard.js";

class SpellList extends Component {
  render() {
    return this.props.spells.length > 0 ? (
      this.props.spells.map(spell => {
        return <SpellCard key={spell.id} spell={spell} handleSort={this.props.handleSort} />;
      })
    ) : (
      <h1>LOADING...</h1>
    );
  }
}

export default SpellList;
