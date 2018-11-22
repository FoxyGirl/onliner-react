import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class InfoLoader extends Component {
  static propTypes = {
    isLoadingGoods: PropTypes.bool.isRequired,
    goodsAmount: PropTypes.number.isRequired,
  }

  render() {
    const { isLoadingGoods, goodsAmount } = this.props
    const outInfo = isLoadingGoods ? `Поиск товаров...` : `Найдено ${goodsAmount} товаров`
    const loadingClass = isLoadingGoods ? 'schema-filter-button__state_animated' : ''
    return (
      <div className="schema-filter-button__inner-container">
        <div className="schema-filter-button__inner">
          <div
            className={`schema-filter-button__state schema-filter-button__state_initial schema-filter-button__state_disabled schema-filter-button__state_control ${loadingClass}`}
          >
            <span className="schema-filter-button__sub schema-filter-button__sub_control" />
            <span className="schema-filter-button__sub schema-filter-button__sub_main">
              {outInfo}
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

const mapStateToProps = state => {
  return {
    isLoadingGoods: state.goods.isLoading,
    goodsAmount: Object.values(state.goods.data).filter(
      ({ title, description }) =>
        title.toLowerCase().includes(state.search.searchFilter.toLowerCase()) ||
        description.toLowerCase().includes(state.search.searchFilter.toLowerCase())
    ).length,
  }
}

export default connect(mapStateToProps)(InfoLoader)
