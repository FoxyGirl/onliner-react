import React from 'react'
import { connect } from 'react-redux'
import { dispatch } from '../../store'
import PropTypes from 'prop-types'
import { readCatalog } from '../../ducks/catalog'
import { PATH_SRC } from '../../services'
import CatalogNavigationItem from './CatalogNavigationItem'

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
        <link rel="stylesheet" href={`${PATH_SRC}catalog-navigation.css`} />

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

CatalogNavigation.PropTypes = {
  catalog: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    catalog: state.catalog,
  }
}

export default connect(mapStateToProps)(CatalogNavigation)
