import React, { Component } from "react";
import Todo from "./code/Todo.js";
import VisibilityToggle from "./code/VisibilityToggle.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <VisibilityToggle />
      </div>
    );
  }
}

export default App;
