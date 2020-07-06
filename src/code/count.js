import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  addOne = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  minusOne = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  reset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <div className="App-header">
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>add count</button>
        <button onClick={this.minusOne}>minus count</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Count;
