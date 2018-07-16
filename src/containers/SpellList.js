import React, { Component } from "react";
import SpellCard from "./SpellCard.js";

class SpellList extends Component {
  state = {
    spells: {
      Cantrip: [],
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      Seven: [],
      Eight: [],
      Nine: []
    }
  };

  compareNames = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (b.name < a.name) {
      return 1;
    }
    return 0;
  };

  componentDidMount() {
    const lvl0 = [];
    const lvl1 = [];
    const lvl2 = [];
    const lvl3 = [];
    const lvl4 = [];
    const lvl5 = [];
    const lvl6 = [];
    const lvl7 = [];
    const lvl8 = [];
    const lvl9 = [];
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
              if (spellItem.level === 0) {
                lvl0.push(spellItem);
              } else if (spellItem.level === 1) {
                lvl1.push(spellItem);
              } else if (spellItem.level === 2) {
                lvl2.push(spellItem);
              } else if (spellItem.level === 3) {
                lvl3.push(spellItem);
              } else if (spellItem.level === 4) {
                lvl4.push(spellItem);
              } else if (spellItem.level === 5) {
                lvl5.push(spellItem);
              } else if (spellItem.level === 6) {
                lvl6.push(spellItem);
              } else if (spellItem.level === 7) {
                lvl7.push(spellItem);
              } else if (spellItem.level === 8) {
                lvl8.push(spellItem);
              } else if (spellItem.level === 9) {
                lvl9.push(spellItem);
              }
            });
        });
      });
    this.setState({
      ...this.state,
      spells: {
        Cantrip: lvl0,
        One: lvl1,
        Two: lvl2,
        Three: lvl3,
        Four: lvl4,
        Five: lvl5,
        Six: lvl6,
        Seven: lvl7,
        Eight: lvl8,
        Nine: lvl9
      }
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Cantrip</h3>
        {this.state.spells.Cantrip
          ? this.state.spells.Cantrip.map(spell => {
              return <SpellCard key={spell.id} spell={spell} handleSort={this.props.handleSort} />;
            })
          : null}
        <h3>Level 1</h3>
        {this.state.spells.One
          ? this.state.spells.One.map(spell => {
              return <SpellCard key={spell.id} spell={spell} handleSort={this.props.handleSort} />;
            })
          : null}
        <h3>Level 2</h3>
        {this.state.spells.Two
          ? this.state.spells.Two.map(spell => {
              return <SpellCard key={spell.id} spell={spell} handleSort={this.props.handleSort} />;
            })
          : null}
        <h3>Level 3</h3>
        {this.state.spells.Three
          ? this.state.spells.Three.map(spell => {
              return <SpellCard key={spell.id} spell={spell} handleSort={this.props.handleSort} />;
            })
          : null}
        <h3>Level 4</h3>
        {this.state.spells.Four
          ? this.state.spells.Four.map(spell => {
              return <SpellCard key={spell.id} spell={spell} handleSort={this.props.handleSort} />;
            })
          : null}
        <h3>Level 5</h3>
        {this.state.spells.Five
          ? this.state.spells.Five.map(spell => {
              return <SpellCard key={spell.id} spell={spell} handleSort={this.props.handleSort} />;
            })
          : null}
        <h3>Level 6</h3>
        {this.state.spells.Six
          ? this.state.spells.Six.map(spell => {
              return <SpellCard key={spell.id} spell={spell} handleSort={this.props.handleSort} />;
            })
          : null}
        <h3>Level 7</h3>
        {this.state.spells.Seven
          ? this.state.spells.Seven.map(spell => {
              return <SpellCard key={spell.id} spell={spell} handleSort={this.props.handleSort} />;
            })
          : null}
        <h3>Level 8</h3>
        {this.state.spells.Eight
          ? this.state.spells.Eight.map(spell => {
              return <SpellCard key={spell.id} spell={spell} handleSort={this.props.handleSort} />;
            })
          : null}
        <h3>Level 9</h3>
        {this.state.spells.Nine
          ? this.state.spells.Nine.map(spell => {
              return <SpellCard key={spell.id} spell={spell} handleSort={this.props.handleSort} />;
            })
          : null}
      </div>
    );
  }
}

export default SpellList;
