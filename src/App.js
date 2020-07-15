import React, { Component } from "react";
import "./App.css";
import Header from "./Indecision/Header";
import Action from "./Indecision/Action";
import Options from "./Indecision/Options";
import AddOption from "./Indecision/AddOption";
class App extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["thing one ", " thing two", "thisng three"];
    return (
      <div className="App-header">
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

export default App;
