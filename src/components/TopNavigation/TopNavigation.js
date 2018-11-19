import React from 'react'
import MainNavigation from 'src/components/MainNavigation'

class TopNavigation extends React.Component {
  render() {
    return (
      <nav className="b-top-navigation">
        <MainNavigation />
        <ul className="b-top-navigation-informers helpers_hide_desktop">
          <li
            className="b-top-navigation-informers__item top-informer-currency down"
            id="currency-informer"
          >
            <a className="b-top-navigation-informers__link" href="https://kurs.onliner.by/">
              <span className="_u">$ 2,1102</span>
            </a>
          </li>
          <li
            className="b-top-navigation-informers__item top-informer-weather"
            id="weather-informer"
          >
            <a className="b-top-navigation-informers__link" href="https://pogoda.onliner.by/">
              <i title="Погода в Минске" className="phenomena-icon extra-small B1" />
              <span className="_u">-6°</span>
            </a>
          </li>
        </ul>
        <ul className="b-top-navigation-cart" id="b-top-navigation-cart">
          <li className="b-top-navigation-cart__item">
            <a href="https://cart.onliner.by/" className="b-top-navigation-cart__link">
              <span>Корзина</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default TopNavigation
