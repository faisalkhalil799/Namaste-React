import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { name, twitterHandle } = this.props;
    const { count } = this.state;
    return (
      <>
        <h1>Coming from class based component</h1>
        <h2>
          Name:{name}, Twitter Handle: {twitterHandle}
        </h2>
        <div>Count: {count}</div>
        <button onClick={this.increaseCounter}>Counter</button>
      </>
    );
  }
}

export default AboutClass;
