import React, { Component } from "react";
import "./App.css";
import Header from "./Indecision/Header";
import Action from "./Indecision/Action";
import Options from "./Indecision/Options";
import AddOption from "./Indecision/AddOption";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: [],
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  handleAddOption(option) {
    if (!option) {
      return "Please Enter a valid Item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This is the same item already exists";
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option]),
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option);
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in hands of the computer";

    return (
      <div className="App-header">
        <Header title={title} subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default App;
/*

Props:

An object
can be used when rendering
changes(from above) cause re rendering
comes from above
Can't be changed by component itself

State
An Object
Can be used when rendering
Changes cause re-renders
Defined in component itself
can be Changed by componet itself

*/
