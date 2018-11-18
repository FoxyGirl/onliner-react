import React from "react";
import MainNavigation from "./MainNavigation";

class TopNavigation extends React.Component {
  render() {
    return (
      <nav className="b-top-navigation">
        {}
        <MainNavigation />
        {}
        {}
        <ul className="b-top-navigation-informers helpers_hide_desktop">
          <li
            className="b-top-navigation-informers__item top-informer-currency down"
            id="currency-informer"
            data-bind="css: {'up': $root.grow === 1,\n                  'down': $root.grow === -1}"
          >
            <a
              className="b-top-navigation-informers__link"
              href="https://kurs.onliner.by/"
              data-bind="visible: true"
            >
              <span className="_u" data-bind="text: '$ ' + $root.amount">
                $ 2,1102
              </span>
            </a>
          </li>
          <li
            className="b-top-navigation-informers__item top-informer-weather"
            id="weather-informer"
          >
            <a
              className="b-top-navigation-informers__link"
              href="https://pogoda.onliner.by/"
              data-bind="visible: true"
              style={{}}
            >
              <i
                data-bind="attr: {'title': '\u041F\u043E\u0433\u043E\u0434\u0430 \u0432 ' + $root.city, class: 'phenomena-icon extra-small ' + $root.icon}"
                title="\u041F\u043E\u0433\u043E\u0434\u0430 \u0432 \u041C\u0438\u043D\u0441\u043A\u0435"
                className="phenomena-icon extra-small B1"
              />
              <span className="_u" data-bind="text: $root.temperature + '\xB0'">
                -6°
              </span>
            </a>
          </li>
        </ul>
        {}
        {}
        <ul className="b-top-navigation-cart" id="b-top-navigation-cart">
          <li
            className="b-top-navigation-cart__item"
            style={{}}
            data-bind="css: {'b-top-navigation-cart__item_active': $root.quantity()},\n                              visible: $root.quantity() || $root.quantity() === 0"
          >
            <a
              href="https://cart.onliner.by/"
              className="b-top-navigation-cart__link"
            >
              {}
              {}
              {}
              <span>Корзина</span>
              {}
            </a>
          </li>
        </ul>
        {}
      </nav>
    );
  }
}

export default TopNavigation;
