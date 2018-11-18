import React from 'react'
import Product from '../Product'

class ProductsList extends React.Component {
  render() {
    return (
      <div className="schema-products" style={{}}>
        <Product />
        <Product />
        {}
        {}
        <div className="schema-special-block" />
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemj8q2"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/f0a9956d07204c9249392e6fed257979.jpg"
                    alt="Apple Watch Edition 42mm Yellow Gold with Black Sport Band (MJ8Q2)"
                    title="Apple Watch Edition 42mm Yellow Gold with Black Sport Band (MJ8Q2)"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemj8q2/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          27 240,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemj8q2/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Edition 42mm Yellow Gold with Black Sport Band (MJ8Q2)"
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemj8q2"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Edition 42mm Yellow Gold with Black Sport Band (MJ8Q2)
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemj8q2/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_40"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">1</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыв
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=12246276"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      29
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemj4a2"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/b2346d5661a903f7468d0c53034b2fe2.jpg"
                    alt="Apple Watch Edition 42mm Rose Gold with White Sport Band (MJ4A2)"
                    title="Apple Watch Edition 42mm Rose Gold with White Sport Band (MJ4A2)"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemj4a2/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          27 240,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemj4a2/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Edition 42mm Rose Gold with White Sport Band (MJ4A2)"
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemj4a2"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Edition 42mm Rose Gold with White Sport Band (MJ4A2)
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemj4a2/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_40"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">1</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыв
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=12246276"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      29
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemkl52"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/054e44fe5c76c95d1546ca92b5df7d27.jpg"
                    alt="Apple Watch Edition 38mm Yellow Gold with Black Sport Band (MKL52)"
                    title="Apple Watch Edition 38mm Yellow Gold with Black Sport Band (MKL52)"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemkl52/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          22 800,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemkl52/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Edition 38mm Yellow Gold with Black Sport Band (MKL52)"
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemkl52"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Edition 38mm Yellow Gold with Black Sport Band (MKL52)
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
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
                      href="https://catalog.onliner.by/smartwatch/apple/applemkl52/reviews/create"
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
                      href="http://forum.onliner.by/posting.php?mode=newtopic&f=633&device=applemkl52"
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemj8p2"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/4abff0f4ff09d7fff00ba823ea3402bd.jpg"
                    alt="Apple Watch Edition 38mm Rose Gold with White Sport Band (MJ8P2)"
                    title="Apple Watch Edition 38mm Rose Gold with White Sport Band (MJ8P2)"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemj8p2/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          22 800,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemj8p2/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Edition 38mm Rose Gold with White Sport Band (MJ8P2)"
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemj8p2"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Edition 38mm Rose Gold with White Sport Band (MJ8P2)
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
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
                      href="https://catalog.onliner.by/smartwatch/apple/applemj8p2/reviews/create"
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
                      href="http://forum.onliner.by/posting.php?mode=newtopic&f=633&device=applemj8p2"
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemkl62"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/3f6ec0e7c0472e5caaec24e6984579bb.jpg"
                    alt="Apple Watch Edition 42mm Yellow Gold with Black Classic Buckle (MKL62)"
                    title="Apple Watch Edition 42mm Yellow Gold with Black Classic Buckle (MKL62)"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemkl62/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          19 980,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemkl62/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Edition 42mm Yellow Gold with Black Classic Buckle (MKL62)"
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemkl62"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Edition 42mm Yellow Gold with Black Classic Buckle (MKL62)
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemkl62/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_40"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">1</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыв
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=12246276"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      29
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemnpq2"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/2d061bbd8393399e89e64a7d83bfbac3.jpeg"
                    alt="Apple Watch Series 2 42mm White Ceramic with Cloud Sport Band [MNPQ2]"
                    title="Apple Watch Series 2 42mm White Ceramic with Cloud Sport Band [MNPQ2]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemnpq2/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          3151,95 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemnpq2/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Series 2 42mm White Ceramic with Cloud Sport Band [MNPQ2]"
                      >
                        4 предложения
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemnpq2"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Series 2 42mm White Ceramic with Cloud Sport Band [MNPQ2]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone SE/iPhone 6/iPhone 6 Plus/iPhone 6s/iPhone 6s Plus/iPhone 7/iPhone 7
                    Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemnpq2/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_40"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">3</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыва
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=18902153"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      43
                    </span>
                    {}
                    {}
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemj482"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/b1e52333bb5b4de2ff12dfc1ee557211.jpg"
                    alt="Apple Watch 42mm Space Black with Space Black Link Bracelet (MJ482)"
                    title="Apple Watch 42mm Space Black with Space Black Link Bracelet (MJ482)"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemj482/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          2552,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemj482/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 42mm Space Black with Space Black Link Bracelet (MJ482)"
                      >
                        4 предложения
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemj482"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 42mm Space Black with Space Black Link Bracelet (MJ482)
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemj482/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_50"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">1</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыв
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=11568891"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      23
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemnpt2"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/3bc121d4e9a303107c958ac8c672e179.jpeg"
                    alt="Apple Watch Series 2 42mm Stainless Steel with Link Bracelet [MNPT2]"
                    title="Apple Watch Series 2 42mm Stainless Steel with Link Bracelet [MNPT2]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemnpt2/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          2471,95 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemnpt2/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Series 2 42mm Stainless Steel with Link Bracelet [MNPT2]"
                      >
                        4 предложения
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemnpt2"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Series 2 42mm Stainless Steel with Link Bracelet [MNPT2]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone SE/iPhone 6/iPhone 6 Plus/iPhone 6s/iPhone 6s Plus/iPhone 7/iPhone 7
                    Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemnpt2/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_40"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">3</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыва
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=18902153"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      43
                    </span>
                    {}
                    {}
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemnq02"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/7979a1c57da1ad018657c9fe15c5a9f3.jpeg"
                    alt="Apple Watch Series 2 42mm Space Black with Link Bracelet [MNQ02]"
                    title="Apple Watch Series 2 42mm Space Black with Link Bracelet [MNQ02]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemnq02/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          2465,95 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemnq02/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Series 2 42mm Space Black with Link Bracelet [MNQ02]"
                      >
                        4 предложения
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemnq02"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Series 2 42mm Space Black with Link Bracelet [MNQ02]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone SE/iPhone 6/iPhone 6 Plus/iPhone 6s/iPhone 6s Plus/iPhone 7/iPhone 7
                    Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemnq02/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_40"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">3</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыва
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=18902153"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      43
                    </span>
                    {}
                    {}
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemj472"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/4347dfec573d37ff5a1a03a0672e2681.jpg"
                    alt="Apple Watch 42mm Stainless Steel with Link Bracelet (MJ472)"
                    title="Apple Watch 42mm Stainless Steel with Link Bracelet (MJ472)"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemj472/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          2308,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemj472/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 42mm Stainless Steel with Link Bracelet (MJ472)"
                      >
                        4 предложения
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemj472"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 42mm Stainless Steel with Link Bracelet (MJ472)
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemj472/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_50"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">1</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыв
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=11568891"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      23
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemj3f2"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/efa476878410e4c80a026119ecf5e9bb.jpg"
                    alt="Apple Watch 38mm Space Black with Space Black Link Bracelet (MJ3F2)"
                    title="Apple Watch 38mm Space Black with Space Black Link Bracelet (MJ3F2)"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemj3f2/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          2200,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemj3f2/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 38mm Space Black with Space Black Link Bracelet (MJ3F2)"
                      >
                        4 предложения
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemj3f2"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 38mm Space Black with Space Black Link Bracelet (MJ3F2)
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
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
                      href="https://catalog.onliner.by/smartwatch/apple/applemj3f2/reviews/create"
                    >
                      Оставьте первый отзыв!
                    </a>
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=14644181"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      4
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/samsung/smr765"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/d11f775c6b4fd1c36a21977ff6522753.jpeg"
                    alt="Samsung Gear S3 frontier LTE [SM-R765]"
                    title="Samsung Gear S3 frontier LTE [SM-R765]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/samsung/smr765/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          2000,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/samsung/smr765/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Samsung Gear S3 frontier LTE [SM-R765]"
                      >
                        3 предложения
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
                    href="https://catalog.onliner.by/smartwatch/samsung/smr765"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Samsung Gear S3 frontier LTE [SM-R765]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка Android/iOS, экран AMOLED 1.3" (360x360, сенсорный),
                    шагомер, пульсометр, время работы: 3 суток
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/samsung/smr765/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_45"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">17</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзывов
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=18888075"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      568
                    </span>
                    {}
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.review_url}"
                      href="https://tech.onliner.by/2016/11/23/smart-watch-2"
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemnp92"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/de688221b22b3af22530cb34afc13e65.jpeg"
                    alt="Apple Watch Series 2 38mm Stainless Steel with Modern Buckle [MNP92]"
                    title="Apple Watch Series 2 38mm Stainless Steel with Modern Buckle [MNP92]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemnp92/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1922,95 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemnp92/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Series 2 38mm Stainless Steel with Modern Buckle [MNP92]"
                      >
                        4 предложения
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemnp92"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Series 2 38mm Stainless Steel with Modern Buckle [MNP92]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone SE/iPhone 6/iPhone 6 Plus/iPhone 6s/iPhone 6s Plus/iPhone 7/iPhone 7
                    Plus, шагомер, пульсометр, время работы: 18 часов
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
                      href="https://catalog.onliner.by/smartwatch/apple/applemnp92/reviews/create"
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
                      href="http://forum.onliner.by/posting.php?mode=newtopic&f=633&device=applemnp92"
                    >
                      Начните обсуждение!
                    </a>
                    {}
                    {}
                    {}
                    {}
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemnq12"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/2ca1fe5824f714798670cd83f3fdead0.jpeg"
                    alt="Apple Watch Series 2 42mm Space Black with Milanese Loop [MNQ12]"
                    title="Apple Watch Series 2 42mm Space Black with Milanese Loop [MNQ12]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemnq12/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1872,95 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemnq12/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Series 2 42mm Space Black with Milanese Loop [MNQ12]"
                      >
                        4 предложения
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemnq12"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Series 2 42mm Space Black with Milanese Loop [MNQ12]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone SE/iPhone 6/iPhone 6 Plus/iPhone 6s/iPhone 6s Plus/iPhone 7/iPhone 7
                    Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemnq12/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_40"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">3</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыва
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=18902153"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      43
                    </span>
                    {}
                    {}
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemmg22"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/fdac94a6474555288d11386152beb416.jpg"
                    alt="Apple Watch 42mm Space Black with Space Black Milanese Loop [MMG22]"
                    title="Apple Watch 42mm Space Black with Space Black Milanese Loop [MMG22]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemmg22/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1809,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemmg22/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 42mm Space Black with Space Black Milanese Loop [MMG22]"
                      >
                        2 предложения
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemmg22"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 42mm Space Black with Space Black Milanese Loop [MMG22]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemmg22/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_50"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">1</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыв
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=11568891"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      23
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemlc92"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/365fd83fdf3b39a9cef1e14bc9b53d16.jpg"
                    alt="Apple Watch 42mm Stainless Steel with Saddle Brown Bracelet [MLC92]"
                    title="Apple Watch 42mm Stainless Steel with Saddle Brown Bracelet [MLC92]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemlc92/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1779,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemlc92/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 42mm Stainless Steel with Saddle Brown Bracelet [MLC92]"
                      >
                        5 предложений
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemlc92"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 42mm Stainless Steel with Saddle Brown Bracelet [MLC92]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemlc92/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_50"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">1</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыв
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=11568891"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      23
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemnpu2"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/63333b6facf24aa637ae08ec977ed29b.jpeg"
                    alt="Apple Watch Series 2 42mm Stainless Steel with Milanese Loop [MNPU2]"
                    title="Apple Watch Series 2 42mm Stainless Steel with Milanese Loop [MNPU2]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemnpu2/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1771,95 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemnpu2/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Series 2 42mm Stainless Steel with Milanese Loop [MNPU2]"
                      >
                        4 предложения
                      </a>
                    </div>
                  </div>
                  {}
                  {}
                  <div className="schema-product__line">
                    <div className="schema-product__price">
                      <a
                        className="schema-product__price-value schema-product__price-value_secondary"
                        data-bind="{attr: {href: $data.html_url + '/used'}}"
                        href="https://catalog.onliner.by/smartwatch/apple/applemnpu2/used"
                      >
                        <span data-bind="{text: '\u043E\u0442 ' + $data.second.min_price.amount.replace('.', ',') + ' \u0440.'}">
                          от 900,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_white"
                        data-bind="{attr: {href: $data.html_url + '/used'}}"
                        href="https://catalog.onliner.by/smartwatch/apple/applemnpu2/used"
                      >
                        <span
                          className="schema-product__adverts-value"
                          data-bind="{html: $data.second.offers_count}"
                        >
                          1
                        </span>
                        <span
                          className="schema-product__adverts-sign"
                          data-bind="{text: $root.format.pluralForm($data.second.offers_count, ['\u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435', '\u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F', '\u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439'])}"
                        >
                          объявление
                        </span>
                      </a>
                    </div>
                  </div>
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemnpu2"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Series 2 42mm Stainless Steel with Milanese Loop [MNPU2]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone SE/iPhone 6/iPhone 6 Plus/iPhone 6s/iPhone 6s Plus/iPhone 7/iPhone 7
                    Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemnpu2/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_40"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">3</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыва
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=18902153"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      43
                    </span>
                    {}
                    {}
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemj402"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/7905348cc5a5460ddddfbe9108ae4366.jpg"
                    alt="Apple Watch 42mm Stainless Steel with Light Brown Leather Loop (MJ402)"
                    title="Apple Watch 42mm Stainless Steel with Light Brown Leather Loop (MJ402)"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemj402/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1758,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemj402/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 42mm Stainless Steel with Light Brown Leather Loop (MJ402)"
                      >
                        5 предложений
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemj402"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 42mm Stainless Steel with Light Brown Leather Loop (MJ402)
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemj402/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_50"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">1</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыв
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=11568891"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      23
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemnpw2"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/64414bf0d139fc0737c7cecc28d40636.jpeg"
                    alt="Apple Watch Series 2 42mm Stainless Steel with Leather Loop [MNPW2]"
                    title="Apple Watch Series 2 42mm Stainless Steel with Leather Loop [MNPW2]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemnpw2/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1671,95 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemnpw2/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Series 2 42mm Stainless Steel with Leather Loop [MNPW2]"
                      >
                        5 предложений
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemnpw2"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Series 2 42mm Stainless Steel with Leather Loop [MNPW2]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone SE/iPhone 6/iPhone 6 Plus/iPhone 6s/iPhone 6s Plus/iPhone 7/iPhone 7
                    Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemnpw2/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_40"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">3</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыва
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=18902153"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      43
                    </span>
                    {}
                    {}
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemj432"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/07e7901c51709e3579977ca3971f13f1.jpg"
                    alt="Apple Watch 42mm Stainless Steel with Stone Leather Loop (MJ432)"
                    title="Apple Watch 42mm Stainless Steel with Stone Leather Loop (MJ432)"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemj432/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1658,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemj432/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 42mm Stainless Steel with Stone Leather Loop (MJ432)"
                      >
                        5 предложений
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemj432"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 42mm Stainless Steel with Stone Leather Loop (MJ432)
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemj432/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_50"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">1</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыв
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=11568891"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      23
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemj372"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/ea65f730314a146d441ca5a49ea153da.jpg"
                    alt="Apple Watch 38mm Stainless Steel with Soft Pink Modern Buckle [MJ372]"
                    title="Apple Watch 38mm Stainless Steel with Soft Pink Modern Buckle [MJ372]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemj372/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1629,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemj372/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 38mm Stainless Steel with Soft Pink Modern Buckle [MJ372]"
                      >
                        5 предложений
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemj372"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 38mm Stainless Steel with Soft Pink Modern Buckle [MJ372]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
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
                      href="https://catalog.onliner.by/smartwatch/apple/applemj372/reviews/create"
                    >
                      Оставьте первый отзыв!
                    </a>
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=14644181"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      4
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemlcl2"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/79870e641a4bab8e46e9106ea3f2da5c.jpg"
                    alt="Apple Watch 38mm Stainless Stee with Saddle Brown Bracelet [MLCL2]"
                    title="Apple Watch 38mm Stainless Stee with Saddle Brown Bracelet [MLCL2]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemlcl2/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1627,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemlcl2/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 38mm Stainless Stee with Saddle Brown Bracelet [MLCL2]"
                      >
                        5 предложений
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemlcl2"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 38mm Stainless Stee with Saddle Brown Bracelet [MLCL2]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
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
                      href="https://catalog.onliner.by/smartwatch/apple/applemlcl2/reviews/create"
                    >
                      Оставьте первый отзыв!
                    </a>
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=14644181"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      4
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemnpr2"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/aebe3fd222e3fa9f3ed116003afe4679.jpeg"
                    alt="Apple Watch Series 2 42mm Stainless Steel with White Sport [MNPR2]"
                    title="Apple Watch Series 2 42mm Stainless Steel with White Sport [MNPR2]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemnpr2/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1617,95 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemnpr2/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Series 2 42mm Stainless Steel with White Sport [MNPR2]"
                      >
                        2 предложения
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemnpr2"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Series 2 42mm Stainless Steel with White Sport [MNPR2]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone SE/iPhone 6/iPhone 6 Plus/iPhone 6s/iPhone 6s Plus/iPhone 7/iPhone 7
                    Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemnpr2/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_40"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">3</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыва
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=18902153"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      43
                    </span>
                    {}
                    {}
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemlfc2"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/68c9286538fce4ec3df9dd6bef80f382.jpg"
                    alt="Apple Watch 42mm Stainless Steel with Midnight Blue Loop [MLFC2]"
                    title="Apple Watch 42mm Stainless Steel with Midnight Blue Loop [MLFC2]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemlfc2/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1569,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemlfc2/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 42mm Stainless Steel with Midnight Blue Loop [MLFC2]"
                      >
                        5 предложений
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemlfc2"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 42mm Stainless Steel with Midnight Blue Loop [MLFC2]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemlfc2/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_50"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">1</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыв
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=11568891"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      23
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemnp72"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/f3fe40d939e897fa61e1b38ba3167a7a.jpeg"
                    alt="Apple Watch Series 2 38mm Stainless Steel with Classic Buckle [MNP72]"
                    title="Apple Watch Series 2 38mm Stainless Steel with Classic Buckle [MNP72]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemnp72/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1567,95 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemnp72/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch Series 2 38mm Stainless Steel with Classic Buckle [MNP72]"
                      >
                        4 предложения
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemnp72"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch Series 2 38mm Stainless Steel with Classic Buckle [MNP72]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone SE/iPhone 6/iPhone 6 Plus/iPhone 6s/iPhone 6s Plus/iPhone 7/iPhone 7
                    Plus, шагомер, пульсометр, время работы: 18 часов
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
                      href="https://catalog.onliner.by/smartwatch/apple/applemnp72/reviews/create"
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
                      href="http://forum.onliner.by/posting.php?mode=newtopic&f=633&device=applemnp72"
                    >
                      Начните обсуждение!
                    </a>
                    {}
                    {}
                    {}
                    {}
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemj342"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/aa2477da1f196e005e60932cb3bb2f7e.jpg"
                    alt="Apple Watch 38mm Stainless Steel with Midnight Blue Buckle [MJ342]"
                    title="Apple Watch 38mm Stainless Steel with Midnight Blue Buckle [MJ342]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemj342/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1538,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemj342/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 38mm Stainless Steel with Midnight Blue Buckle [MJ342]"
                      >
                        5 предложений
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemj342"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 38mm Stainless Steel with Midnight Blue Buckle [MJ342]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
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
                      href="https://catalog.onliner.by/smartwatch/apple/applemj342/reviews/create"
                    >
                      Оставьте первый отзыв!
                    </a>
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=14644181"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      4
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemjyp2"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/c04a0455f0cfc5bd8a9f3950560037f9.jpg"
                    alt="Apple Watch 42mm Stainless Steel with Black Loop (L) [MJYP2]"
                    title="Apple Watch 42mm Stainless Steel with Black Loop (L) [MJYP2]"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemjyp2/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1528,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemjyp2/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 42mm Stainless Steel with Black Loop (L) [MJYP2]"
                      >
                        5 предложений
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemjyp2"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 42mm Stainless Steel with Black Loop (L) [MJYP2]
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemjyp2/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_50"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">1</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыв
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=11568891"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      23
                    </span>
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
        {}
        {}
        <div className="schema-product__group">
          <div
            className="schema-product"
            data-bind="css: {'schema-product_narrow-sizes': $root.isNarrowImages}"
          >
            {}
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
                {}
                <a
                  data-bind="attr: {href: product.html_url}"
                  href="https://catalog.onliner.by/smartwatch/apple/applemj452"
                >
                  <img
                    data-bind="attr: {src: product.images.header, alt: product.full_name, title: product.full_name},\n                              style: {'max-width': product.sizes_percents.width ? product.sizes_percents.width + '%' : '',\n                                      'max-height': (product.image_size && product.image_size.height) ? Math.min(product.image_size.height, $root.imageBaseSizes.height) + 'px' : ''}"
                    src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/cd93c67e66037155c2ac7e2a88a108ad.jpg"
                    alt="Apple Watch 42mm Stainless Steel with Blue Leather Loop (MJ452)"
                    title="Apple Watch 42mm Stainless Steel with Blue Leather Loop (MJ452)"
                  />
                </a>
                {}
              </div>
            </div>
            {}
            {}
            {}
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
                        href="https://catalog.onliner.by/smartwatch/apple/applemj452/prices"
                      >
                        от{' '}
                        <span data-bind="html: $root.format.minPrice($data.prices, 'BYN')">
                          1528,00 р.
                        </span>
                      </a>
                    </div>
                    <div className="schema-product__offers">
                      <a
                        className="schema-product__button button button_orange"
                        data-bind="attr: {href: $data.prices.html_url, title: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 ' + $data.full_name},\n                              text: $data.offers + ' ' + $root.format.pluralForm($data.offers, ['\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F', '\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439'])"
                        onclick="window.ga && window.ga('catalogContext.send', 'event', 'button', 'offer');\n                              window.VK && VK.Retargeting.Event('compare_vk');\n                              window.fbq && fbq('trackCustom', 'compare_fb');\n                              window._trm && _trm.push({ id: window.SOCIAL_PIXELS_IDS.mailru.global || null, type: 'reachGoal', goal: 'compare_ok' });"
                        href="https://catalog.onliner.by/smartwatch/apple/applemj452/prices"
                        title="\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 Apple Watch 42mm Stainless Steel with Blue Leather Loop (MJ452)"
                      >
                        4 предложения
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
                    href="https://catalog.onliner.by/smartwatch/apple/applemj452"
                  >
                    <span data-bind="html: product.extended_name || product.full_name">
                      Apple Watch 42mm Stainless Steel with Blue Leather Loop (MJ452)
                    </span>
                  </a>
                </div>
                {}
                <div className="schema-product__description">
                  <span data-bind="html: product.description">
                    часы-компаньон, поддержка iOS, совместимость с iPhone 5/iPhone 5c/iPhone
                    5s/iPhone 6/iPhone 6 Plus, шагомер, пульсометр, время работы: 18 часов
                  </span>
                </div>
                <div className="schema-product__info">
                  <div className="schema-product__rating-group">
                    {}
                    <a
                      className="schema-product__rating"
                      data-bind="attr: {href: product.reviews.html_url}"
                      href="https://catalog.onliner.by/smartwatch/apple/applemj452/reviews"
                    >
                      <span
                        data-bind="attr: {class: 'rating rating_' + product.reviews.rating}"
                        className="rating rating_50"
                      />
                      <span className="schema-product__review-count">
                        <span data-bind="text: product.reviews.count">1</span>
                        <span data-bind="text: $root.format.pluralForm(product.reviews.count, ['\u043E\u0442\u0437\u044B\u0432', '\u043E\u0442\u0437\u044B\u0432\u0430', '\u043E\u0442\u0437\u044B\u0432\u043E\u0432'])">
                          отзыв
                        </span>
                      </span>
                    </a>
                    {}
                    {}
                    {}
                  </div>
                  <div className="schema-product__info-additional">
                    {}
                    <a
                      className="schema-product__info-link"
                      data-bind="attr: {href: product.forum.topic_url}"
                      href="http://forum.onliner.by/viewtopic.php?t=11568891"
                    >
                      Обсуждение
                    </a>
                    {}
                    {}
                    {}
                    {}
                    <span
                      className="schema-product__topic-count"
                      data-bind="text: product.forum.replies_count"
                    >
                      23
                    </span>
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
        {}
        {}
        {}
      </div>
    )
  }
}

export default ProductsList
