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
    console.log(viewName)
    this.setState({view: viewName})
  }
  render() {

  return (
    <div className="App">
      <Header changeView={this.changeView} />
      <Main view={this.state.view} />
      <Footer />
    </div>
    )
  }
}

export default App;
