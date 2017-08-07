import React, { Component } from 'react'
import './App.css'

import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

import Home from './views/home/Home'
import Gofundme from './views/gofundme/Gofundme'
import Contact from './views/contact/Contact'

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

  const views = {
    "Home": <Home />,
    "Contact": <Contact />
  }
  return (
    <div className="App">
      <Header changeView={this.changeView} />
      <Main>
        {views[this.state.view]}
      </Main>
      <Footer />
    </div>
    )
  }
}

export default App;
