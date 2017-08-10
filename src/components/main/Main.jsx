import React from "react";
import "./main.css";

import Home from "./views/home/Home";
import Contact from "./views/contact/Contact";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="hero">
          <input className="imageNav" type="button" value="<<" />
          <Contact showContact={this.props.showContactForm} />
          <input className="imageNav" type="button" value=">>" />
        </div>
        <Home />
      </div>
    );
  }
}

export default Main;
