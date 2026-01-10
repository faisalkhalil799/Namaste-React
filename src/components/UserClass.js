import React from "react";
import Context from "../utils/Context";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        login: "Default",
        avatar_url:
          "https://www.freepik.com/free-vector/blue-circle-with-white-user_145857007.htm#fromView=keyword&page=1&position=0&uuid=5a69e9d9-eeda-4e39-b461-698fc4f8a9fc&query=Avatar+profile",
      },
      // count: 0,
    };
  }

  async componentDidMount() {
    console.log("Second console log");

    const response = await fetch(
      "https://api.github.com/users/faisalkhalil799"
    );
    const json = await response.json();
    this.setState({
      userInfo: json,
    });
    this.timerId = setInterval(() => {
      console.log("Printing every second");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Third console log");
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    console.log("Fourth console log");
  }
  // increaseCounter = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  render() {
    console.log("First console log");
    // const { name, twitterHandle } = this.props;
    const { name, login, avatar_url } = this.state.userInfo;
    return (
      <>
        {/* Using context in class based components */}
        <Context.Consumer>
          {(data) => (
            <h1 className="font-extrabold ">
              {"Using context in class based components: " + data.loggedInUser}
            </h1>
          )}
        </Context.Consumer>
        <h1>Coming from class based component</h1>
        <h2>
          Name:{name}, Github User Handle: {login}
        </h2>
        <img src={avatar_url} alt="avatar image" />
        {/* <div>Count: {count}</div> */}
        {/* <button onClick={this.increaseCounter}>Counter</button> */}
      </>
    );
  }
}

export default AboutClass;
