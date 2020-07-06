import React, { Component } from "react";
import Count from "./count";
let visibility = false;
export default class VisibilityToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggleVisibility = () => {
    visibility = !visibility;

    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h1> Visibility Toggle </h1>
        <button onClick={this.toggleVisibility}>
          {visibility ? "Hide options" : "show options"}
        </button>
        {visibility && (
          <div>
            <Count />
          </div>
        )}
      </div>
    );
  }
}
