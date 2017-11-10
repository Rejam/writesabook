import React from "react";
import "./main.css";

import image1 from "../../assets/images/bridgesAtNight.jpeg";
import image2 from "../../assets/images/deanstreet.jpeg";

import Home from "./views/home/Home";
import Contact from "./views/contact/Contact";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.image_left = this.image_left.bind(this);
    this.image_right = this.image_right.bind(this);
    //this.disableEnable = this.disableEnable.bind(this);
  }
  image_left() {
    this.props.updateImage(-1);
    //this.disable();
  }
  image_right() {
    this.props.updateImage(1);
    //this.disable();
  }
  // disable() {
  //   const buttons = document.querySelectorAll(".imageNav");
  //   buttons.forEach(button => (button.disabled = true));
  //   this.enable(buttons);
  // }
  // enable(buttons) {
  //   setTimeout(() =>
  //     buttons.forEach(button => {
  //       console.log("enabling");
  //       button.disabled = false;
  //     }, 5000)
  //   );
  // }
  render() {
    const images = [image1, image2];
    return (
      <div className="main">
        <div
          className="hero"
          style={{
            backgroundImage: "url(" + images[this.props.current_image] + ")"
          }}
        >
          <input
            className="imageNav"
            type="button"
            value="<<"
            onClick={this.image_left}
          />
          <Contact showContact={this.props.showContactForm} />
          <input
            className="imageNav"
            type="button"
            value=">>"
            onClick={this.image_right}
          />
        </div>
        <Home />
      </div>
    );
  }
}

export default Main;
