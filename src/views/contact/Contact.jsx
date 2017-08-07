import React from 'react'
import './contact.css'

class Contact extends React.Component {
  handleClick(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="contact">
        <p>If you have any questions, or suggestions, please contact us via email, Twitter or you can use the form below:</p>
        <form className="contactForm" action="">
          <label htmlFor="form-name">Name: </label>
          <input type="text" id="form-name" placeholder="Name:"/>

          <label htmlFor="form-email">Email: </label>
          <input type="email" id="form-email" placeholder="Email:"/>

          <textarea name="" id="form-text" rows="5" placeholder="Enter your message"></textarea>
          <input type="submit" onClick={this.handleClick}/>
        </form>
      </div>
    )
  }
}

export default Contact
