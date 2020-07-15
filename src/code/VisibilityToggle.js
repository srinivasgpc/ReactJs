import React, { Component } from "react";

export default class VisibilityToggle extends Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1> Visibility Toggle </h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Hide options" : "show options"}
        </button>
        {this.state.visibility && (
          <div>
            <p>your hidden text is now visible</p>
          </div>
        )}
      </div>
    );
  }
}
