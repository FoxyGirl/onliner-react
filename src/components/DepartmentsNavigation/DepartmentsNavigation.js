import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'src/store'
import { readDepartments } from 'src/ducks/departments'
import PropTypes from 'prop-types'
import { PATH_SRC } from 'src/services'
import DepartmentsNavigationItem from './DepartmentsNavigationItem'

class DepartmentsNavigation extends Component {
  componentDidMount = () => {
    dispatch(readDepartments())
  }

  renderList = items =>
    items.map(({ id, name }) => <DepartmentsNavigationItem key={id} name={name} />)

  render() {
    const { departments } = this.props
    console.log(`departments  ${JSON.stringify(departments)}`)
    const newItems = departments.data
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

DepartmentsNavigation.propTypes = {
  departments: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
  }),
}

const mapStateToProps = state => {
  return {
    departments: state.departments,
  }
}

export default connect(mapStateToProps)(DepartmentsNavigation)
