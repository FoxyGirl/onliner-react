import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    const {
      route: { routes },
    } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/">Home</Link>
          <Link to="/basket">Basket</Link>
          {renderRoutes(routes)}
          <Button type="primary"> And Design</Button>
        </header>
      </div>
    )
  }
}

export default App
