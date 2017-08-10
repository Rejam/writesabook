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
        <input
          className="btn nav__btn nav__btn--contact"
          type="button"
          value="Contact Us"
          onClick={this.handleClick}
        />
        <a
          className="socialLink"
          href="https://www.gofundme.com/newcastle-writes-a-book"
        >
          Go Fund Me
        </a>

        <a className="socialLink" href="">
          Twitter <i className="fa fa-twitter" aria-hidden="true" />
        </a>

        <a className="socialLink" href="">
          Facebook <i className="fa fa-facebook" aria-hidden="true" />
        </a>
      </nav>
    );
  }
}

export default Nav;
