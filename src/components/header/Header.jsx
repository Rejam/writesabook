import React from 'react';
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
      <h1>Writes A Book</h1>
      <nav>
        <input type="button" value="Home" onClick={this.handleClick} />
        <input type="button" value="Contact" onClick={this.handleClick} />
      </nav>
    </div>
    )
  }
}

export default Header;
