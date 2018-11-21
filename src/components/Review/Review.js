import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Review extends Component {
  static PropTypes = {
    reviews: PropTypes.array.isRequired,
  }

  render() {
    const { reviews } = this.props
    if (reviews.length > 0) {
      return (
        <span className="schema-product__review-count">
          <span>{reviews.length}</span>
          <span> отзыв</span>
        </span>
      )
    } else {
      return (
        <a
          className="schema-product__info-link"
          href="https://catalog.onliner.by/smartwatch/apple/applemj3k2/reviews/create"
        >
          Оставьте первый отзыв!
        </a>
      )
    }
  }
}

export default Review
