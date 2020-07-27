import React, { Component } from "react";
import "./App.css";
import Count from "./code/count";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App-header">
        <Count />
      </div>
    );
  }
}

export default App;
