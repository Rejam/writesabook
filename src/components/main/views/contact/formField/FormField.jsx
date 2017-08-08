import React from 'react'

class FormField extends React.Component {
  render() {
    const name = this.props.name
    const label = name[0].toUpperCase() + name.slice(1)
    const type = this.props.type
    return (
      <div className="contactForm__field">
        <label className="contactForm__label" htmlFor={name}>{label} </label>
        <input className="contactForm__input" name={name} type={type} id={name} placeholder={"Your "+name} />
      </div>
    )
  }
}

export default FormField
