import React from 'react'
import { PATH_SRC } from 'src/services'

class Product extends React.Component {
  render() {
    return (
      <div className="schema-product__group">
        <div
          className="schema-product"
          data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
        >
          <div className="schema-product__part schema-product__part_1">
            <div className="schema-product__compare">
              <div data-bind="template: {name: 'schema-product__compare-template', data: product}">
                <label
                  className="schema-product__control"
                  data-bind="attr: {'title': $data.isCompared() ? '\u0412 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438' : '\u0412 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435'}"
                  title="\u0412 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435"
                >
                  <span className="i-checkbox i-checkbox_yellow">
                    <input
                      type="checkbox"
                      className="i-checkbox__real"
                      data-bind="checked: $data.isCompared"
                    />
                    <span className="i-checkbox__faux" />
                  </span>
                </label>
              </div>
            </div>
            <div className="schema-product__image">
              <a
                data-bind="attr: {href: product.html_url}"
                href="https://catalog.onliner.by/smartwatch/apple/applemj3k2"
              >
                <img
                  data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                  src={`${PATH_SRC}e35ac646b6f0187cb717c7b33979c5f1.jpg`}
                  alt="Apple Watch Edition 38mm Rose Gold with Rose Modern Buckle (MJ3K2)"
                  title="Apple Watch Edition 38mm Rose Gold with Rose Modern Buckle (MJ3K2)"
                />
              </a>
            </div>
          </div>
          <div className="schema-product__part schema-product__part_2">
            <div className="schema-product__part schema-product__part_3">
              <div
                className="schema-product__price-group"
                data-bind="template: {name: 'schema-product__price-template', data: product}"
              >
                {}
                {}
                {}
                {}
                {}
                {}
                {}
                <div className="schema-product__line">
                  <div className="schema-product__price">
                    <a
                      data-bind="attr: {href: $data.prices.html_url}"
                      className="schema-product__price-value schema-product__price-value_primary"
                      href="https://catalog.onliner.by/smartwatch/apple/applemj3k2/prices"
                    >
                      от{' '}
                      <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                        38 690,00 р.
                      </span>
                    </a>
                  </div>
                  <div className="schema-product__offers">
                    <a
                      className="schema-product__button button button_orange"
                      href="https://catalog.onliner.by/smartwatch/apple/applemj3k2/prices"
                      title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Edition 38mm Rose Gold with Rose Modern Buckle (MJ3K2)"
                    >
                      1 предложение
                    </a>
                  </div>
                </div>
                {}
                {}
                {}
                {}
                {}
                {}
                {}
              </div>
            </div>
            <div className="schema-product__part schema-product__part_4">
              <div className="schema-product__title">
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemj3k2"
                >
                  <span data-bind="html: product.extended_name || product.full_name">
                    Apple Watch Edition 38mm Rose Gold with Rose Modern Buckle (MJ3K2)
                  </span>
                </a>
              </div>
              {}
              <div className="schema-product__description">
                <span data-bind="html: product.description">
                  часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone 5s/iPhone
                  6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                </span>
              </div>
              <div className="schema-product__info">
                <div className="schema-product__rating-group">
                  {}
                  {}
                  {}
                  <a
                    className="schema-product__info-link"
                    data-bind="attr: {href: product.reviews.html_url + '/create'}"
                    href="https://catalog.onliner.by/smartwatch/apple/applemj3k2/reviews/create"
                  >
                    Оставьте первый отзыв!
                  </a>
                  {}
                </div>
                <div className="schema-product__info-additional">
                  {}
                  {}
                  {}
                  <a
                    className="schema-product__info-link"
                    data-bind="attr: {href: product.forum.post_url}"
                    href="http://forum.onliner.by/posting.php?mode=newtopic&f=633&device=applemj3k2"
                  >
                    Начните обсуждение!
                  </a>
                  {}
                  {}
                  {}
                  {}
                  <a
                    className="schema-product__info-link"
                    data-bind="attr: {href: product.review_url}"
                    href="http://tech.onliner.by/2015/05/13/apple-watch-review"
                  >
                    Обзор
                  </a>
                  {}
                </div>
              </div>
              {}
            </div>
            <div className="schema-product__part schema-product__part_5">
              {}
              {}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
