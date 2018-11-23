import React, { Component } from 'react'
import { dispatch } from './store'
import { readDepartments } from './ducks/departments'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import Header from './components/Header'
import DepartmentsNavigation from './components/DepartmentsNavigation'
import CategoryPage from './components/CategoryPage'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  componentDidMount = () => {
    dispatch(readDepartments())
  }

  render() {
    return (
      <div className="layout-container" id="onliner-react">
        <div id="container">
          <div className="g-container-outer">
            <div className="bnr-top-wide bnr-top-wide_fixed-height">
              <div>Banner</div>
            </div>
            <div className="l-gradient-wrapper">
              <noscript>You need to enable JavaScript to run this app.</noscript>
              <Header />
              <div className="g-middle" data-component="MiddleSection">
                <div className="g-middle-i">
                  <DepartmentsNavigation />
                  <CategoryPage />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
