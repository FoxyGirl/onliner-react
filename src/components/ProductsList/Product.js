import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PATH_SRC } from 'src/services'
import Discussions from 'src/components/Discussions'
import Review from 'src/components/Review'

class Product extends Component {
  static PropTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    startPrice: PropTypes.string.isRequired,
    detailsLink: PropTypes.string.isRequired,
    offers: PropTypes.array.isRequired,
    reviews: PropTypes.array.isRequired,
    discussionsCount: PropTypes.number.isRequired,
    discussionsLink: PropTypes.string.isRequired,
    overlookLink: PropTypes.string.isRequired,
  }

  render() {
    const {
      id,
      title,
      image,
      description,
      startPrice,
      detailsLink,
      offers,
      reviews,
      discussionsCount,
      discussionsLink,
      overlookLink,
    } = this.props.product
    const product = this.props.product
    console.log(`product = ${JSON.stringify(product)}`)
    return (
      <div className="schema-product__group" key={id}>
        <div className="schema-product">
          <div className="schema-product__part schema-product__part_1">
            <div className="schema-product__compare">
              <div>
                <label className="schema-product__control" title={title}>
                  <span className="i-checkbox i-checkbox_yellow">
                    <input type="checkbox" className="i-checkbox__real" />
                    <span className="i-checkbox__faux" />
                  </span>
                </label>
              </div>
            </div>
            <div className="schema-product__image">
              <a href={detailsLink}>
                <img src={`${PATH_SRC}${image}`} alt={title} title={title} />
              </a>
            </div>
          </div>
          <div className="schema-product__part schema-product__part_2">
            <div className="schema-product__part schema-product__part_3">
              <div className="schema-product__price-group">
                <div className="schema-product__line">
                  <div className="schema-product__price">
                    <a
                      className="schema-product__price-value schema-product__price-value_primary"
                      href={detailsLink}
                    >
                      от <span>{`${startPrice} р.`}</span>
                    </a>
                  </div>
                  <div className="schema-product__offers">
                    <a
                      className="schema-product__button button button_orange"
                      href={detailsLink}
                      title={title}
                    >
                      {offers.length} предложение
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="schema-product__part schema-product__part_4">
              <div className="schema-product__title">
                <a href={detailsLink}>
                  <span>{title}</span>
                </a>
              </div>
              {}
              <div className="schema-product__description">
                <span>{description}</span>
              </div>
              <div className="schema-product__info">
                <div className="schema-product__rating-group">
                  <Review reviews={reviews} />
                </div>
                <div className="schema-product__info-additional">
                  <Discussions
                    discussionsCount={discussionsCount}
                    discussionsLink={discussionsLink}
                  />

                  <a className="schema-product__info-link" href={overlookLink}>
                    Обзор
                  </a>
                </div>
              </div>
            </div>
            <div className="schema-product__part schema-product__part_5" />
          </div>
        </div>
      </div>
    )
  }
}

export default Product
