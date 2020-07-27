import React, { Component } from "react";
import "./App.css";
//import Header from "./Indecision/Header";
//import Action from "./Indecision/Action";
//import Options from "./Indecision/Options";

import AddOption from "./Indecision/AddOption";
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options,
    };
  }
  handleDeleteOptions = () => {
    this.setState({ options: [] });
  };
  handleDeleteOption = (key) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => option !== key),
      };
    });
  };
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
    return (
      <div className="App-header">
        <Header />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />

        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};
const Header = (props) => {
  return (
    <div className="App">
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: "Indecision app",
  subtitle: "Put your life in hands of the computer",
};
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        what should I do
      </button>
    </div>
  );
};
const Options = (props) => {
  return (
    <div className="App">
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={() => props.handleDeleteOption(props.optionText)}>
        X
      </button>
    </div>
  );
};
export default IndecisionApp;
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


concet 2 : default props

For fuctional and classbase component can have default props
*/

/*
state component:require class and fuctionality of the component
stateless component:  when there is only render method 
*/
