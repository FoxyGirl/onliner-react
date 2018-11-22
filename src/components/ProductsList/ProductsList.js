import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Product from './Product'

class ProductsList extends React.Component {
  static propTypes = {
    goods: PropTypes.array.isRequired,
  }

  render() {
    const { goods } = this.props

    return (
      <div className="schema-products">
        {goods.length > 0 &&
          goods.map(({ id, ...product }) => <Product key={id} product={product} />)}
        <div className="schema-special-block" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    goods: Object.values(state.goods.data).filter(
      ({ title, description }) =>
        title.toLowerCase().includes(state.search.searchFilter.toLowerCase()) ||
        description.toLowerCase().includes(state.search.searchFilter.toLowerCase())
    ),
  }
}

export default connect(mapStateToProps)(ProductsList)
