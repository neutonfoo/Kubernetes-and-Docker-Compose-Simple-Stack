import React, { Component } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    value: "",
  };

  async componentDidMount() {
    const v = await axios.get("/api/value");
    this.setState({
      value: v.data,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.value}</p>
        </header>
      </div>
    );
  }
}

export default App;
