import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'src/store'
import { readCatalog } from 'src/ducks/catalog'
import PropTypes from 'prop-types'
import { PATH_SRC } from 'src/services'
import CatalogNavigationItem from './CatalogNavigationItem'

class CatalogNavigation extends React.Component {
  componentDidMount = () => {
    dispatch(readCatalog())
  }

  renderList = items => items.map(({ id, name }) => <CatalogNavigationItem key={id} name={name} />)

  render() {
    const { catalog } = this.props
    console.log(`catalog  ${JSON.stringify(catalog)}`)
    const newItems = catalog.data
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

CatalogNavigation.propTypes = {
  catalog: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
  }),
}

const mapStateToProps = state => {
  return {
    catalog: state.catalog,
  }
}

export default connect(mapStateToProps)(CatalogNavigation)
