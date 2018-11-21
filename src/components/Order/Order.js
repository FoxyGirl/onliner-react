import React from 'react'

class Order extends React.Component {
  render() {
    return (
      <div className="schema-order" id="schema-order">
        <a href="dd" className="schema-order__link">
          <span>Сначала</span>
          <span className="schema-order__text">Дорогие</span>
        </a>
        <div className="schema-order__popover">
          <div className="schema-order__list">
            <div className="schema-order__item">
              <span>Популярные</span>
            </div>
            <div className="schema-order__item">
              <span>Дешевые</span>
            </div>
            <div className="schema-order__item schema-order__item_active">
              <span>Дорогие</span>
            </div>
            <div className="schema-order__item">
              <span>Новые</span>
            </div>
            <div className="schema-order__item">
              <span>Рейтинговые</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Order
