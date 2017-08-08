import React from 'react';
import Title from './title/Title'
import './header.css'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    console.log('Header', e.target)
    this.props.changeView(e.target.value)
  }
  render() {
    return (
    <div className="header">
      <Title />
      <nav>
        <input className="btn nav__btn nav__btn--home" type="button" value="Home" onClick={this.handleClick} />
        <input className="btn nav__btn nav__btn--contact" type="button" value="Contact" onClick={this.handleClick} />
      </nav>
    </div>
    )
  }
}

export default Header;
