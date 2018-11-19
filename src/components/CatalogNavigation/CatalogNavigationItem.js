import React from 'react'

class CatalogNavigationItem extends React.Component {
  render() {
    const { id, name } = this.props
    return (
      <li className="catalog-navigation-classifier__item " key={id}>
        <span className="catalog-navigation-classifier__item-icon catalog-navigation-classifier__item-icon_id_2" />
        <span className="catalog-navigation-classifier__item-title">
          <span className="catalog-navigation-classifier__item-title-wrapper">{name}</span>
        </span>
      </li>
    )
  }
}

export default CatalogNavigationItem