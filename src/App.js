import React, { Component } from "react";
import SpellList from "./containers/SpellList";
import ClassFilter from "./components/ClassFilter";
import "./App.css";

class App extends Component {
  state = {
    spells: {
      cantrip: [],
      one: [],
      two: [],
      three: [],
      four: [],
      five: [],
      six: [],
      seven: [],
      eight: [],
      nine: []
    },
    cl: "All"
  };

  componentDidMount() {
    fetch("https://spell-api.herokuapp.com/spells/0")
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          spells: {
            ...this.state.spells,
            cantrip: json
          }
        });
      });
    fetch("https://spell-api.herokuapp.com/spells/1")
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          spells: {
            ...this.state.spells,
            one: json
          }
        });
      });
    fetch("https://spell-api.herokuapp.com/spells/2")
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          spells: {
            ...this.state.spells,
            two: json
          }
        });
      });
    fetch("https://spell-api.herokuapp.com/spells/3")
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          spells: {
            ...this.state.spells,
            three: json
          }
        });
      });
    fetch("https://spell-api.herokuapp.com/spells/4")
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          spells: {
            ...this.state.spells,
            four: json
          }
        });
      });
    fetch("https://spell-api.herokuapp.com/spells/5")
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          spells: {
            ...this.state.spells,
            five: json
          }
        });
      });
    fetch("https://spell-api.herokuapp.com/spells/6")
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          spells: {
            ...this.state.spells,
            six: json
          }
        });
      });
    fetch("https://spell-api.herokuapp.com/spells/7")
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          spells: {
            ...this.state.spells,
            seven: json
          }
        });
      });
    fetch("https://spell-api.herokuapp.com/spells/8")
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          spells: {
            ...this.state.spells,
            eight: json
          }
        });
      });
    fetch("https://spell-api.herokuapp.com/spells/9")
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          spells: {
            ...this.state.spells,
            nine: json
          }
        });
      });
  }

  handleCheck = e => {
    this.setState({ ...this.state, cl: e.target.value });
  };
  render() {
    return (
      <div className="main-container">
        <ClassFilter handleCheck={this.handleCheck} cl={this.state.cl} />
        <SpellList spells={this.state.spells} cl={this.state.cl} />
      </div>
    );
  }
}

export default App;
