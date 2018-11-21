import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Discussions extends Component {
  static PropTypes = {
    discussionsCount: PropTypes.number.isRequired,
    discussionsLink: PropTypes.string.isRequired,
  }

  render() {
    const { discussionsCount, discussionsLink } = this.props
    if (discussionsCount > 0) {
      return (
        <div className="schema-product__info-additional">
          <a className="schema-product__info-link" href={discussionsLink}>
            Обсуждение
          </a>
          <span className="schema-product__topic-count"> {discussionsCount}</span>
        </div>
      )
    } else {
      return (
        <a
          className="schema-product__info-link"
          href="http://forum.onliner.by/posting.php?mode=newtopic&f=633&device=applemj3k2"
        >
          Начните обсуждение!
        </a>
      )
    }
  }
}

export default Discussions
