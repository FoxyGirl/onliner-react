import React from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryFilter from "./CategoryFilter";
import Order from "./Order";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";

class Category extends React.Component {
  render() {
    return (
      <div className="catalog-content js-scrolling-area">
        {}
        <div className="schema-grid__wrapper">
          <div id="schema-scroll-to" />
          <CategoryHeader />
          <div className="schema-grid">
            <div className="schema-grid__left-column">
              <CategoryFilter />
              <div
                className="js-schema-banner-container schema-banners__wrapper"
                style={{
                  height: "3188px"
                }}
              >
                <div
                  id="google-banner"
                  className="schema-filter__block"
                  data-bind="css: { 'sticked-to-top': $root.isTopSticked,\n                          'sticked-to-bottom': $root.isBottomSticked},\n                      style: { top: $root.topOffset }"
                  style={{
                    width: "250px",
                    top: "0px"
                  }}
                >
                  {}
                  <div
                    id="div-gpt-ad-1476699481059-0"
                    data-google-query-id="CIzas7rZ2t4CFRQu4AodHlAEZA"
                  >
                    <div
                      id="google_ads_iframe_/312496551/catalog_240x400_0__container__"
                      style={{
                        border: "0pt none",
                        display: "inline-block",
                        width: "240px",
                        height: "400px"
                      }}
                    >
                      <iframe
                        frameBorder={0}
                        src="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/container(1).html"
                        id="google_ads_iframe_/312496551/catalog_240x400_0"
                        title="3rd party ad content"
                        name
                        scrolling="no"
                        marginWidth={0}
                        marginHeight={0}
                        width={240}
                        height={400}
                        data-is-safeframe="true"
                        sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                        data-google-container-id={7}
                        style={{
                          border: "0px",
                          verticalAlign: "bottom"
                        }}
                        data-load-complete="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                                .schema-banners__wrapper {\n            position: relative;\n        }\n\n        #google-banner {\n            -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n            -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n            padding: 10px 0;\n        }\n\n        #google-banner.sticked-to-top {\n            position: fixed;\n        }\n\n        #google-banner.sticked-to-bottom {\n            position: absolute;\n            bottom: 0;\n        }\n    "
                }}
              />
            </div>
            <div className="js-schema-results schema-grid__center-column">
              <Order />
              <div
                className="schema-tags"
                id="schema-tags"
                style={{}}
                data-bind="visible: true"
              >
                {}
                <div
                  className="schema-tags__item"
                  data-bind="click: $root.removeTag.bind($root, tag), attr: {title: tag.facet.name}"
                  title="\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430"
                >
                  <span
                    className="schema-tags__text"
                    data-bind="html: tag.text"
                  >
                    от 0
                  </span>
                </div>
                <div
                  className="schema-tags__item"
                  data-bind="click: $root.removeTag.bind($root, tag), attr: {title: tag.facet.name}"
                  title="\u0422\u0438\u043F"
                >
                  <span
                    className="schema-tags__text"
                    data-bind="html: tag.text"
                  >
                    часы-компаньон
                  </span>
                </div>
              </div>
              <div className="schema-clear" />
              <ProductsList />
              <div
                className="schema-products"
                id="schema-second-offers"
                style={{
                  display: "none"
                }}
                data-bind="visible: $root.activeSegment() === 'second',\n              css: {'schema-products_processing': $root.isProcessing()}"
              >
                {}
                {}
                {}
                {}
                {}
                {}
                {}
                {}
              </div>
              <Pagination />
            </div>
          </div>
        </div>
        <div className="compare-button-container" id="compare-button-container">
          <div className="compare-button-container__inner">
            <div
              className="compare-button compare-button_visible"
              data-bind="css: {'compare-button_visible': $root.states.visible,\n                          'compare-button_hidden': $root.states.hidden,\n                          'compare-button_animated': $root.states.animated}"
            >
              <div className="compare-button__inner-container">
                <div
                  className="compare-button__inner"
                  data-bind="css: {'compare-button__inner_moved': $root.states.moved},\n                              event:{mouseout: $root.onMouseout.bind($root),\n                                  mouseover: $root.onMouseover.bind($root)}"
                >
                  <div className="compare-button__state compare-button__state_initial">
                    <a
                      title="\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F"
                      tabIndex={-1}
                      className="compare-button__sub compare-button__sub_control"
                      data-bind="click: $root.doMoved.bind($root)"
                    >
                      <span className="compare-button__icon compare-button__icon_trash" />
                    </a>
                    <a
                      className="compare-button__sub compare-button__sub_main"
                      target="_parent"
                      data-bind="attr: {href: $root.link}"
                      href="https://catalog.onliner.by/compare/mu682"
                    >
                      <span data-bind="html: $root.text">1 товар</span>
                      в сравнении
                    </a>
                  </div>
                  <div
                    className="compare-button__state compare-button__state_clear compare-button__state_hidden"
                    data-bind="click: $root.clear.bind($root)"
                  >
                    <a tabIndex={-1} className="compare-button__sub">
                      Очистить список сравнения
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="compare-button-container__poof"
              data-bind="css: {'compare-button-container__poof_action': $root.states.poof}"
            />
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
    );
  }
}

export default Category;
