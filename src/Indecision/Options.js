import React, { Component } from "react";

export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert(this.props.options);
  }
  render() {
    return (
      <div className="App">
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
        <button onClick={this.handleRemoveAll}>Remove all</button>
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}
