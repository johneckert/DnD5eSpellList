import React, { Component } from "react";
import SpellName from "../components/SpellName";
import SpellDetail from "../components/SpellDetail";

class SpellCard extends Component {
  state = {
    toggle: false
  };

  handleToggle = e => {
    e.preventDefault();
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="card" onClick={this.handleToggle}>
        <SpellName spell={this.props.spell} />
        {this.state.toggle ? <SpellDetail spell={this.props.spell} /> : null}
      </div>
    );
  }
}

export default SpellCard;
