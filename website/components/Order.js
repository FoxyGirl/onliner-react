import React from "react";

class Order extends React.Component {
  render() {
    return (
      <div className="schema-order" id="schema-order">
        <a
          className="schema-order__link"
          data-bind="click: $root.toggle.bind($root)"
        >
          {}
          <span>Сначала</span>
          {}
          <span
            data-bind="text: $root.active().text,\n                      css: { 'schema-order__text': $root.active().type !== 'default' }"
            className="schema-order__text"
          >
            Дорогие
          </span>
        </a>
        <div className="schema-order__popover">
          <div
            className="schema-order__list"
            data-bind="foreach: {data: $root.types, as: 'type'}"
          >
            <div
              className="schema-order__item"
              data-bind="css: {'schema-order__item_active': $root.active().type === type},\n                          click: function () { $root.change(type) }"
            >
              <span data-bind="text: $root.items[type].text">Популярные</span>
            </div>
            <div
              className="schema-order__item"
              data-bind="css: {'schema-order__item_active': $root.active().type === type},\n                          click: function () { $root.change(type) }"
            >
              <span data-bind="text: $root.items[type].text">Дешевые</span>
            </div>
            <div
              className="schema-order__item schema-order__item_active"
              data-bind="css: {'schema-order__item_active': $root.active().type === type},\n                          click: function () { $root.change(type) }"
            >
              <span data-bind="text: $root.items[type].text">Дорогие</span>
            </div>
            <div
              className="schema-order__item"
              data-bind="css: {'schema-order__item_active': $root.active().type === type},\n                          click: function () { $root.change(type) }"
            >
              <span data-bind="text: $root.items[type].text">Новые</span>
            </div>
            <div
              className="schema-order__item"
              data-bind="css: {'schema-order__item_active': $root.active().type === type},\n                          click: function () { $root.change(type) }"
            >
              <span data-bind="text: $root.items[type].text">Рейтинговые</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
