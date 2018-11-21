import React, { Component } from 'react'

class InfoLoader extends Component {
  render() {
    const { isLoadingGoods, goods } = this.props
    const goodsAmount = Object.keys(goods).length
    console.log(`isLoadingGoods ${isLoadingGoods} / goods.length = ${goods}`)
    return (
      <div className="schema-filter-button__inner-container">
        <div className="schema-filter-button__inner">
          <div className="schema-filter-button__state schema-filter-button__state_initial schema-filter-button__state_disabled schema-filter-button__state_control">
            <span className="schema-filter-button__sub schema-filter-button__sub_control" />
            <span className="schema-filter-button__sub schema-filter-button__sub_main">
              Найдено {goodsAmount} товаров
            </span>
          </div>
          <div className="schema-filter-button__state schema-filter-button__state_clear schema-filter-button__state_hidden">
            <span className="schema-filter-button__sub">Сбросить фильтр</span>
          </div>
        </div>
      </div>
    )
  }
}

export default InfoLoader
