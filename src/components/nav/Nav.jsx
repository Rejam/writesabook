import React from "react";
import "./nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log("Header", e.target);
    this.props.changeView(e.target.value);
  }
  render() {
    return (
      <nav className="navbar">
        <input
          className="btn nav__btn nav__btn--home"
          type="button"
          value="Home"
          onClick={this.handleClick}
        />
        <input
          className="btn nav__btn nav__btn--contact"
          type="button"
          value="Contact"
          onClick={this.handleClick}
        />
        <a
          className="socialLink"
          href="https://www.gofundme.com/newcastle-writes-a-book"
        >
          GoFundMe
        </a>
        <a className="socialLink" href="">
          Twitter
        </a>
        <a className="socialLink" href="">
          Facebook
        </a>
      </nav>
    );
  }
}

export default Nav;
