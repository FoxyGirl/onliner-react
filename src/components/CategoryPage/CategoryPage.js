import React from 'react'
import { dispatch } from 'src/store'
import { readGoods } from 'src/ducks/goods'
import CategoryHeader from 'src/components/CategoryHeader'
import CategoryFilter from 'src/components/CategoryFilter'
import Order from 'src/components/Order'
import ProductsList from 'src/components/ProductsList'
import Pagination from 'src/components/Pagination'

class CategoryPage extends React.Component {
  componentDidMount = () => {
    console.log('!!! CategoryPage')
    console.log('readGoods')
    dispatch(readGoods())
  }

  render() {
    return (
      <div className="catalog-content js-scrolling-area">
        <div className="schema-grid__wrapper">
          <CategoryHeader />
          <div className="schema-grid">
            <div className="schema-grid__left-column">
              <CategoryFilter />
              <div
                className="js-schema-banner-container schema-banners__wrapper"
                style={{
                  height: '318px',
                }}
              />
            </div>
            <div className="js-schema-results schema-grid__center-column">
              <Order />
              <div className="schema-tags" id="schema-tags" style={{}} data-bind="visible: true">
                <div
                  className="schema-tags__item"
                  title="\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430"
                >
                  <span className="schema-tags__text">от 0</span>
                </div>
                <div className="schema-tags__item" title="\u0422\u0438\u043F">
                  <span className="schema-tags__text">часы-компаньон</span>
                </div>
              </div>
              <div className="schema-clear" />
              <ProductsList />
              <div
                className="schema-products"
                id="schema-second-offers"
                style={{
                  display: 'none',
                }}
              />
              <Pagination />
            </div>
          </div>
        </div>
        <div className="compare-button-container" id="compare-button-container">
          <div className="compare-button-container__inner">
            <div className="compare-button compare-button_visible">
              <div className="compare-button__inner-container">
                <div className="compare-button__inner">
                  <div className="compare-button__state compare-button__state_initial">
                    <a
                      href="cc"
                      title="\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F"
                      tabIndex={-1}
                      className="compare-button__sub compare-button__sub_control"
                    >
                      <span className="compare-button__icon compare-button__icon_trash" />
                    </a>
                    <a
                      className="compare-button__sub compare-button__sub_main"
                      target="_parent"
                      href="https://catalog.onliner.by/compare/mu682"
                    >
                      <span data-bind="html: $root.text">1 товар </span>
                      в сравнении
                    </a>
                  </div>
                  <div className="compare-button__state compare-button__state_clear compare-button__state_hidden">
                    <a tabIndex={-1} className="compare-button__sub" href="cc">
                      Очистить список сравнения
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="compare-button-container__poof" />
          </div>
        </div>
        <div className="scrolling-button__container-outer">
          <div className="scrolling-button__container">
            <div className="scrolling-button__container-inner">
              <span className="scrolling-button scrolling-button_up js-scrolling-button js-scrolling-button-up" />
              <span className="scrolling-button scrolling-button_down js-scrolling-button js-scrolling-button-down" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryPage
