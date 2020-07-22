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
      nine: [],
    },
    cl: "All",
  };

  componentDidMount() {
    fetch(
      "https://api.airtable.com/v0/appopQdKP8QVwM6O1/Spells?api_key=keyZ45rUNype5TblZ"
    )
      .then((res) => res.json())
      .then((json) => {
        this.mapSpells(json);
      });
  }

  mapSpells = (responseData) => {
    if (responseData.records) {
      let records = responseData.records;
      records.forEach((spell) => {
        let cleanedSpell = {
          id: spell.id,
          name: spell.fields.Name,
          desc: spell.fields.Description,
          higher: spell.fields.Higher || "",
          page: spell.fields.Page || "",
          range: spell.fields.Range,
          components: spell.fields.Components.toString(),
          material: spell.fields.Materials || "",
          ritual: spell.fields.Ritual,
          duration: spell.fields.Duration,
          concentration: spell.fields.Concentration,
          casting_time: spell.fields.CastingTime,
          level: spell.fields.Level,
          school: spell.fields.Type,
          classes: spell.fields.Classes,
          created_at: spell.createdTime,
          updated_at: spell.updatedTime,
        };
        switch (cleanedSpell.level) {
          case "1st":
            //this.state.spells.one.push(cleanedSpell);
            this.setState({
              ...this.state,
              spells: {
                ...this.state.spells,
                one: [...this.state.spells.one, cleanedSpell],
              },
            });
            break;
          case "2nd":
            //this.state.spells.two.push(cleanedSpell);
            this.setState({
              ...this.state,
              spells: {
                ...this.state.spells,
                two: [...this.state.spells.two, cleanedSpell],
              },
            });
            break;
          case "3rd":
            //this.state.spells.three.push(cleanedSpell);
            this.setState({
              ...this.state,
              spells: {
                ...this.state.spells,
                three: [...this.state.spells.three, cleanedSpell],
              },
            });
            break;
          case "4th":
            //this.state.spells.four.push(cleanedSpell);
            this.setState({
              ...this.state,
              spells: {
                ...this.state.spells,
                four: [...this.state.spells.four, cleanedSpell],
              },
            });
            break;
          case "5th":
            //this.state.spells.five.push(cleanedSpell);
            this.setState({
              ...this.state,
              spells: {
                ...this.state.spells,
                five: [...this.state.spells.five, cleanedSpell],
              },
            });
            break;
          case "6th":
            //this.state.spells.six.push(cleanedSpell);
            this.setState({
              ...this.state,
              spells: {
                ...this.state.spells,
                six: [...this.state.spells.six, cleanedSpell],
              },
            });
            break;
          case "7th":
            //this.state.spells.seven.push(cleanedSpell);
            this.setState({
              ...this.state,
              spells: {
                ...this.state.spells,
                seven: [...this.state.spells.seven, cleanedSpell],
              },
            });
            break;
          case "8th":
            //this.state.spells.eight.push(cleanedSpell);
            this.setState({
              ...this.state,
              spells: {
                ...this.state.spells,
                eight: [...this.state.spells.eight, cleanedSpell],
              },
            });
            break;
          case "9th":
            //this.state.spells.nine.push(cleanedSpell);
            this.setState({
              ...this.state,
              spells: {
                ...this.state.spells,
                nine: [...this.state.spells.nine, cleanedSpell],
              },
            });
            break;
          case "Cantrip":
            //this.state.spells.cantrip.push(cleanedSpell);
            this.setState({
              ...this.state,
              spells: {
                ...this.state.spells,
                cantrip: [...this.state.spells.cantrip, cleanedSpell],
              },
            });
            break;
          default:
            console.log("bad level info on spell");
            break;
        }
      });
    }
  };

  handleCheck = (e) => {
    this.setState({ ...this.state, cl: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="main-container">
        <ClassFilter handleCheck={this.handleCheck} cl={this.state.cl} />
        <SpellList spells={this.state.spells} cl={this.state.cl} />
      </div>
    );
  }
}

export default App;
