import { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, show: true };
  }

  componentDidMount() {
    this.setState({ favoriteColor: "red" });
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 5000);
  }
  changeToBlue = () => {
    this.setState({ favoriteColor: "blue" });
  };
  // shouldComponentUpdate() {
  // return false;
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById(
      "messageBeforeUpdate"
    ).innerHTML = `Before the update, the favorite color was ${prevState.favoriteColor}`;
  }
  componentDidUpdate() {
    document.getElementById(
      "messageDidUpdate"
    ).innerHTML = `The updated color is ${this.state.favoriteColor}`;
  }
  render() {
    return (
      <>
        <p>My favorite color is {this.state.favoriteColor}</p>
        <button onClick={this.changeToBlue}>change to blue</button>
        <p id="messageBeforeUpdate"></p>
        <p id="messageDidUpdate"></p>
        <hr />
        {this.state.show && <Child />}
        <button onClick={() => this.setState({ show: false })}>Delete</button>
      </>
    );
  }
}

export class Child extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted");
  }
  render() {
    return (
      <>
        <h3>Hello World</h3>
      </>
    );
  }
}

export default Color;