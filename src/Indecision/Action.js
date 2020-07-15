import React, { Component } from "react";

export default class Action extends React.Component {
  render() {
    return (
      // IMP1 : handlePick() for calling, to reference it say this.handlePick without any parenthesis
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          what should I do
        </button>
      </div>
    );
  }
}
