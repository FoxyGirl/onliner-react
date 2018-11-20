import React, { Component } from 'react'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import Header from './components/Header'
import CatalogNavigation from './components/CatalogNavigation'
import CategoryPage from './components/CategoryPage'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="layout-container">
        <div id="container">
          <div className="g-container-outer">
            <div className="bnr-top-wide bnr-top-wide_fixed-height">
              <script async="async" src="./Товары в каталоге Onliner.by_files/gpt.js" />

              <div
                dangerouslySetInnerHTML={{ __html: '<!-- /312496551/catalog_970x90(ATF) -->' }}
              />

              <div id="div-gpt-ad-1476699139023-0">
                <div
                  id="google_ads_iframe_/312496551/catalog_970x90(ATF)_0__container__"
                  style={{ border: '0pt none' }}
                >
                  <iframe
                    id="google_ads_iframe_/312496551/catalog_970x90(ATF)_0"
                    title="3rd party ad content"
                    name="google_ads_iframe_/312496551/catalog_970x90(ATF)_0"
                    width="728"
                    height="90"
                    scrolling="no"
                    marginWidth="0"
                    marginHeight="0"
                    frameBorder="0"
                    style={{ border: '0px', verticalAlign: 'bottom' }}
                    src="./Товары в каталоге Onliner.by_files/saved_resource.html"
                  />
                </div>
              </div>
            </div>
            <div className="l-gradient-wrapper">
              <noscript>You need to enable JavaScript to run this app.</noscript>
              <Header />
              <div className="g-middle" data-component="MiddleSection">
                <div className="g-middle-i">
                  <CatalogNavigation catalog={this.props.catalog} />
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
