import React, { Component } from 'react'
import './App.css'

import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

class App extends Component {
  constructor() {
    super()
    this.state = ({view: 'Home'})
    this.changeView = this.changeView.bind(this)
  }
  changeView(viewName) {
    this.setState({view: viewName})
  }
  render() {
  return (
    <div className="App">
<Footer />
      <Header changeView={this.changeView} />
      <Main view={this.state.view} />

    </div>
    )
  }
}

export default App;
