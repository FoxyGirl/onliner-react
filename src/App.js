import React, { Component } from 'react'
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
      <div class="layout-container">
        <div id="container">
          <div class="g-container-outer">
            <div class="bnr-top-wide bnr-top-wide_fixed-height">
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
                    marginwidth="0"
                    marginheight="0"
                    frameborder="0"
                    style={{ border: '0px', verticalAlign: 'bottom' }}
                    src="./Товары в каталоге Onliner.by_files/saved_resource.html"
                  />
                </div>
              </div>
            </div>
            <div class="l-gradient-wrapper">
              <noscript>You need to enable JavaScript to run this app.</noscript>
              <Header />
              <div class="g-middle" data-component="MiddleSection">
                <div class="g-middle-i">
                  <CatalogNavigation />
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
