import React from 'react'
import TopMenu from '../TopMenu'
import Search from '../Search'
import UserBar from '../UserBar'

class Header extends React.Component {
  render() {
    return (
      <header className="g-top">
        <TopMenu />
        <div className="b-top-actions">
          <div className="g-top-i">
            <div className="b-top-logo">
              <a href="https://www.onliner.by/">
                <img
                  srcSet="https://gc.onliner.by/images/logo/onliner_logo.v3.png?token=1542368974,
                  https://gc.onliner.by/images/logo/onliner_logo.v3@2x.png?token=1542368974 2x"
                  src="./Товары в каталоге Onliner.by_files/onliner_logo.v3@2x.png"
                  width={180}
                  height={40}
                  alt="Onliner"
                  className="onliner_logo"
                />
              </a>
            </div>
            <div className="b-top-wrapper">
              <Search />
              <UserBar />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
