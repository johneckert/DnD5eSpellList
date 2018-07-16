import React, { Component } from "react";
import SpellList from "./containers/SpellList";
import ClassFilter from "./components/ClassFilter";
import "./App.css";

class App extends Component {
  state = {
    spells: [],
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

  componentDidMount() {
    const allSpells = [];
    //fetch list of spells
    fetch("http://www.dnd5eapi.co/api/spells")
      .then(res => res.json())
      .then(json => {
        //fetch detail data for each spell
        json.results.forEach(spell => {
          fetch(spell.url)
            .then(res => res.json())
            .then(json => {
              let spellItem = {};
              spellItem.id = json["_id"];
              spellItem.name = json["name"];
              spellItem.desc = json["desc"];
              spellItem.higher = json["higher_level"];
              spellItem.page = json["page"];
              spellItem.range = json["range"];
              spellItem.components = json["components"];
              spellItem.material = json["material"];
              spellItem.ritual = json["ritual"] === "yes" ? true : false;
              spellItem.duration = json.duration;
              spellItem.concentration = json["concentration"] === "yes" ? true : false;
              spellItem.castingTime = json["casting_time"];
              spellItem.level = json["level"];
              spellItem.school = json["school"]["name"];
              spellItem.classes = json["classes"].map(castClass => castClass["name"]);
              spellItem.subclasses = json["subclasses"].map(subclass => subclass["name"]);
              allSpells.push(spellItem);
            });
        });
      });
    this.setState({ ...this.state, spells: allSpells });
  }

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
        <SpellList spells={this.state.spells} />
      </div>
    );
  }
}

export default App;
