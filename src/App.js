import React, { Component } from "react";

import "./App.css";
const app = {
  title: "Form APp",
  subtitle: "LIsts will display ",
  options: ["Dec", "Nov", "Oct"],
  numbers: [2001, 3001, 4001],
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFormSumit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
      app.options.push(option);
      e.target.elements.option.value = "";
    }
  };
  onRemoveAll = () => {
    app.options = [];
  };
  render() {
    return (
      <div className="App-header">
        <h1>{app.title}</h1>
        <h3>{app.subtitle}</h3>
        <p>{app.options.length > 0 ? "Here are the options" : "No options"}</p>

        <ol>
          {app.options.map((opp) => {
            return <li key={opp}>option: {opp}</li>;
          })}
        </ol>
        <button onClick={this.onRemoveAll}>Remove All</button>

        <div>
          <form onSubmit={this.onFormSumit}>
            <input type="text" name="option" />

            <button>Add option</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
