import React from 'react'
import { readCatalog } from '../../ducks/catalog'
import { dispatch } from '../../store'
import CatalogNavigationItem from '../CatalogNavigationItem'

class CatalogNavigation extends React.Component {
  componentDidMount = () => {
    dispatch(readCatalog())
  }

  renderList = items => items.map(({ id, name }) => <CatalogNavigationItem key={id} name={name} />)

  render() {
    const { catalog } = this.props
    console.log(`catalog = ${JSON.stringify(catalog)}`)

    const newItems = catalog.data
    console.log(`newItems = ${JSON.stringify(newItems)} / isArray ${Array.isArray(newItems)}`)

    return (
      <React.Fragment>
        <link rel="stylesheet" href="./Товары в каталоге Onliner.by_files/catalog-navigation.css" />

        <div className="catalog-navigation">
          <div
            className="catalog-navigation-classifier-buffer"
            style={{
              height: '40px',
            }}
          />
          <ul className="catalog-navigation-classifier catalog-navigation-classifier_simple">
            {Array.isArray(newItems) ? this.renderList(newItems) : null}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default CatalogNavigation
