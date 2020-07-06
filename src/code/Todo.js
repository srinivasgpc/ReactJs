import React, { Component } from "react";
import "./App.css";
let app = {
  title: "ToDo's APP",
  subtitle: "curriculum",
  options: [],
  numbers: [2001, 3001, 4001],
};
class Todo extends Component {
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
    this.forceUpdate();
  };
  onRemoveAll = () => {
    app.options = [];

    this.forceUpdate();
  };
  onDelete = (key) => {
    let newOptions = app.options.filter((option, index) => index !== key);
    app.options = newOptions;
    this.forceUpdate();
  };
  onEdit = () => {};
  onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
  };
  render() {
    return (
      <div className="App-header">
        <h1>{app.title}</h1>
        <h3>{app.subtitle}</h3>
        <p>{app.options.length > 0 ? "Here are the options" : "No options"}</p>

        <ol>
          {app.options.map((opp, key) => {
            return (
              <li key={key}>
                option: {opp}
                <button onClick={() => this.onDelete(key)}>X</button>
                <button onClick={() => this.onEdit}>Edit</button>
              </li>
            );
          })}
        </ol>
        <button onClick={this.onRemoveAll}>Remove All</button>
        <button
          disabled={app.options.length === 0}
          onClick={this.onMakeDecision}
        >
          What should I do ?
        </button>
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

export default Todo;
