import React, { Component } from "react";
import SpellLevel from "./SpellLevel";

class SpellList extends Component {
  render() {
    return (
      <div className="spell-list">
        <SpellLevel
          lvl={"Cantrip"}
          spells={this.props.spells.cantrip}
          cl={this.props.cl}
        />
        <SpellLevel
          lvl={"Level 1"}
          spells={this.props.spells.one}
          cl={this.props.cl}
        />
        <SpellLevel
          lvl={"Level 2"}
          spells={this.props.spells.two}
          cl={this.props.cl}
        />
        <SpellLevel
          lvl={"Level 3"}
          spells={this.props.spells.three}
          cl={this.props.cl}
        />
        <SpellLevel
          lvl={"Level 4"}
          spells={this.props.spells.four}
          cl={this.props.cl}
        />
        <SpellLevel
          lvl={"Level 5"}
          spells={this.props.spells.five}
          cl={this.props.cl}
        />
        <SpellLevel
          lvl={"Level 6"}
          spells={this.props.spells.six}
          cl={this.props.cl}
        />
        <SpellLevel
          lvl={"Level 7"}
          spells={this.props.spells.seven}
          cl={this.props.cl}
        />
        <SpellLevel
          lvl={"Level 8"}
          spells={this.props.spells.eight}
          cl={this.props.cl}
        />
        <SpellLevel
          lvl={"Level 9"}
          spells={this.props.spells.nine}
          cl={this.props.cl}
        />
      </div>
    );
  }
}

export default SpellList;
