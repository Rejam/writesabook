import React from "react";
import "./main.css";
import "./animations.css";

import Home from "./views/home/Home";
import Gofundme from "./views/gofundme/Gofundme";
import Contact from "./views/contact/Contact";

class Main extends React.Component {
  render() {
    const hidden = this.props.showContactForm ? "" : "hide";
    return (
      <div className="main">
        <div className="hero">
          <input className="imageNav" type="button" value="<<" />
          <div className={hidden}>
            <Contact />
          </div>
          <input className="imageNav" type="button" value=">>" />
        </div>
        <Home />
      </div>
    );
  }
}

export default Main;
