import React, { Component } from "react";
import SpellList from "./containers/SpellList";
import ClassFilter from "./components/ClassFilter";
import "./App.css";

class App extends Component {
  state = {
    cl: {
      bard: true,
      cleric: true,
      druid: true,
      paladin: true,
      ranger: true,
      sorcerer: true,
      warlock: true,
      wizard: true
    }
  };

  handleFilter = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  handleCheck = e => {
    this.setState({
      ...this.state,
      cl: { ...this.state.cl, [e.target.value]: !this.state.cl[e.target.value] }
    });
  };

  render() {
    return (
      <div>
        <ClassFilter
          handleCheck={this.handleCheck}
          cl={this.state.cl}
          handleFilter={this.handleFilter}
        />
        <SpellList />
      </div>
    );
  }
}

export default App;
