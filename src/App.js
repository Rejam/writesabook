import React, { Component } from "react";
import "./App.css";
import "C:/Users/rejam/Documents/Projects/writesabook/node_modules/font-awesome/css/font-awesome.min.css";

import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

class App extends Component {
  constructor() {
    super();
    this.state = { showContact: false, current_image: 0 };
    this.toggleContact = this.toggleContact.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }
  toggleContact() {
    const toggle = !this.state.showContact;
    //console.log(!this.state.showContact);
    this.setState({ showContact: toggle });
  }
  changeImage(num) {
    const numberOfImages = 2;
    const nextImage = this.state.current_image + num;
    const newImage =
      nextImage < 0 ? numberOfImages - 1 : nextImage % numberOfImages;
    this.setState({ current_image: newImage });
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Nav toggleContactForm={this.toggleContact} />
        <Main
          current_image={this.state.current_image}
          updateImage={this.changeImage}
          showContactForm={this.state.showContact}
        />
      </div>
    );
  }
}

export default App;
