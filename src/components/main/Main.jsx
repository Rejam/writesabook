import React from 'react'
import './main.css'
import './animations.css'
import ReactTransitions from 'react-transitions';

import Home from './views/home/Home'
import Gofundme from './views/gofundme/Gofundme'
import Contact from './views/contact/Contact'

class Main extends React.Component {
  render() {

      const views = {
        "Home": <Home key="home" />,
        "Contact": <Contact key="contact" />
      }
      const view = views[this.props.view]

    return (

      <ReactTransitions
  transition="move-to-left-move-from-right"
  width="600"
  height="300">

      <div key={view.key} className="main"> {view} </div>

    </ReactTransitions>

    )
  }
}

export default Main
