import React, { Component } from "react";
import SpellLevel from "./SpellLevel";

class SpellList extends Component {
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
    classes: []
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
        cantrip: lvl0,
        one: lvl1,
        two: lvl2,
        three: lvl3,
        four: lvl4,
        five: lvl5,
        six: lvl6,
        seven: lvl7,
        eight: lvl8,
        nine: lvl9
      }
    });
  }

  render() {
    console.log("List Render", this.state.spells);
    return (
      <div>
        <SpellLevel lvl={"Cantrip"} spells={this.state.spells.cantrip} />
        <SpellLevel lvl={"Level 1"} spells={this.state.spells.one} />
        <SpellLevel lvl={"Level 2"} spells={this.state.spells.two} />
        <SpellLevel lvl={"Level 3"} spells={this.state.spells.three} />
        <SpellLevel lvl={"Level 4"} spells={this.state.spells.four} />
        <SpellLevel lvl={"Level 5"} spells={this.state.spells.five} />
        <SpellLevel lvl={"Level 6"} spells={this.state.spells.six} />
        <SpellLevel lvl={"Level 7"} spells={this.state.spells.seven} />
        <SpellLevel lvl={"Level 8"} spells={this.state.spells.eight} />
        <SpellLevel lvl={"Level 9"} spells={this.state.spells.nine} />
      </div>
    );
  }
}

export default SpellList;
