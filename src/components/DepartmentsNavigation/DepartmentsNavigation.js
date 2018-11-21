import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { PATH_SRC } from 'src/services'
import DepartmentsNavigationItem from './DepartmentsNavigationItem'

class DepartmentsNavigation extends Component {
  static propTypes = {
    departments: PropTypes.array.isRequired,
  }

  render() {
    const { departments } = this.props
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
            {departments.length > 0 &&
              departments.map(({ id, name }) => <DepartmentsNavigationItem key={id} name={name} />)}
          </ul>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    departments: state.departments.data,
  }
}

export default connect(mapStateToProps)(DepartmentsNavigation)
