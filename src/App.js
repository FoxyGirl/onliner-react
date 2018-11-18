import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import logo from './logo.svg'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div class="layout-container">
        <div dangerouslySetInnerHTML={{ __html: '<!-- Container -->' }} />
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
              <div dangerouslySetInnerHTML={{ __html: '<!-- Top -->' }} />

              <div dangerouslySetInnerHTML={{ __html: '<!-- Top -->' }} />

              <noscript>You need to enable JavaScript to run this app.</noscript>

              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>Здесь будет React для onliner.</p>
                </header>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
