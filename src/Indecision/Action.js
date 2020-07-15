import React, { Component } from "react";

export default class Action extends React.Component {
  handlePick() {
    alert("handlePicker");
  }

  render() {
    return (
      // IMP1 : handlePick() for calling, to reference it say this.handlePick without any parenthesis
      <div>
        <button onClick={this.handlePick}>what should I do</button>
      </div>
    );
  }
}
