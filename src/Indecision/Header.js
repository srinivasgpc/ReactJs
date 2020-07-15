import React, { Component } from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}
