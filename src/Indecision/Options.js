import React, { Component } from "react";

export default class Options extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.handleDeleteOptions}>Remove all</button>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}
const Option = (props) => {
  return <div>{props.optionText}</div>;
};
