import React from "react";

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props, counter: 0 };
  }
  handleClick = () => {
    this.setState((state) => ({
      counter: (state.counter += 1),
    }));
  };
  render() {
    if (this.state.counter >= 5) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return (
      <div
        style={{ fontSize: "50px", cursor: "pointer" }}
        onClick={this.handleClick}
      >
        {this.state.counter}
      </div>
    );
  }
}

export default BuggyCounter;