import React, { Component } from "react";
import "./Usestate.css";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="container mt-3 mb-3">
        <h2>Count : {count}</h2>

        <button
          onClick={this.handleDecrement}
          disabled={count === 0 ? true : false}
        >
          -
        </button>
        <button
          onClick={this.handleIncrement}
          disabled={count === 8 ? true : false}
        >
          +
        </button>
      </div>
    );
  }
}
