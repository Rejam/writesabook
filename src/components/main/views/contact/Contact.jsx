import React from "react";
import "./contact.css";
import FormField from "./formField/FormField";

class Contact extends React.Component {
  handleClick(e) {}
  render() {
    return (
      <div className="contact">
        <h4>Contact Us</h4>
        <form
          className="contactForm"
          action="https://formspree.io/writesabook@protonmail.com"
          method="post"
        >
          <FormField type="text" name="name" />
          <FormField type="email" name="email" />

          <div className="contactForm__field">
            <textarea
              name="message"
              className="contactForm_textArea"
              rows="6"
              cols="10"
              id="message"
              placeholder="Enter your message"
            />
          </div>

          <input
            className="btn contactForm__submit"
            type="submit"
            onClick={this.handleClick}
          />
        </form>
      </div>
    );
  }
}

export default Contact;
