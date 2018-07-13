import React, { Component } from "react";
import SpellCard from "./SpellCard.js";

class SpellList extends Component {
  state = {
    spells: []
  };

  componentDidMount() {
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

              //add spell to state
              let updatedSpells = this.state.spells;
              updatedSpells.push(spellItem);
              this.setState({ spells: updatedSpells });
            });
        });
      });
  }
  render() {
    return this.state.spells.length > 0
      ? this.state.spells.map(spell => {
          return <SpellCard key={spell.id} spell={spell} />;
        })
      : null;
  }
}

export default SpellList;
