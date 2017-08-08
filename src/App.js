import React, { Component } from "react";
import "./App.css";

import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

class App extends Component {
  constructor() {
    super();
    this.state = { view: "Home" };
    this.changeView = this.changeView.bind(this);
  }
  changeView(viewName) {
    this.setState({ view: viewName });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Nav changeView={this.changeView} />

        <Main view={this.state.view} />
      </div>
    );
  }
}

export default App;
