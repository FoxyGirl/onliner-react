import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Product from './Product'

class ProductsList extends React.Component {
  static propTypes = {
    goods: PropTypes.object.isRequired,
  }

  render() {
    const { goods } = this.props
    const newItems = Object.values(goods)

    return (
      <div className="schema-products" style={{}}>
        {newItems.length > 0 &&
          newItems.map(({ id, ...product }) => <Product key={id} product={product} />)}
        <div className="schema-special-block" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    goods: state.goods.data,
  }
}

export default connect(mapStateToProps)(ProductsList)
