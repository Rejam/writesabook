import React, { Component } from "react";
import "./App.css";
import "C:/Users/rejam/Documents/Projects/writesabook/node_modules/font-awesome/css/font-awesome.min.css";

import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

class App extends Component {
  constructor() {
    super();
    this.state = { showContact: false };
    this.toggleContact = this.toggleContact.bind(this);
  }
  toggleContact() {
    const toggle = !this.state.showContact;
    console.log(toggle);
    this.setState({ showContact: toggle });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Nav toggleContactForm={this.toggleContact} />
        <Main showContactForm={this.state.showContact} />
      </div>
    );
  }
}

export default App;
