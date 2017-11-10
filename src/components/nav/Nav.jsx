import React from "react";
import "./nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.toggleContactForm();
  }
  render() {
    return (
      <nav className="navbar">
        <a
          className="nav__link"
          href="https://www.gofundme.com/newcastle-writes-a-book"
        >
          Go Fund Me
        </a>

        <a className="nav__link" href="www.twitter.com">
          Twitter <i className="fa fa-twitter" aria-hidden="true" />
        </a>

        <a className="nav__link" href="www.facebook.com">
          Facebook <i className="fa fa-facebook" aria-hidden="true" />
        </a>

        <a className="nav__link" href="#page_top" onClick={this.handleClick}>
          Contact Us<i className="fa fa-envelope" aria-hidden="true" />
        </a>
      </nav>
    );
  }
}

export default Nav;
