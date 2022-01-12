import React from "react";
import "./App.css";
import Counter from "./Counter";

class App extends React.Component {
  state = {
    fullName: "Rahim Mdn",
    bio: "I'm a web developer, this my experience through the years...",
    imgSrc: "/imagevictor.jpg",
    profession: "Web Developer",
    show: false,
  };

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" />
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1>Show the profile</h1>
        )}
        <button onClick={this.handleClick}>
          {!this.state.show ? "show" : "hide"}
        </button>
        <>
          <h1>Show the count</h1>
          <Counter />
        </>
      </div>
    );
  }
}

export default App;
