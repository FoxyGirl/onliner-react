import React, { Component } from 'react'
import { dispatch } from 'src/store'
import { searchGood } from 'src/ducks/search'

class Search extends Component {
  state = {
    search: '',
  }
  input = null

  handleChangeInput = event => {
    const search = event.target.value
    this.setState({ search })
    dispatch(searchGood(search))
  }

  render() {
    return (
      <div id="fast-search" className="fast-search">
        {}
        <form
          className="fast-search__form"
          action="https://catalog.onliner.by/search/"
          method="get"
          autoComplete="off"
        >
          <input
            className="fast-search__input"
            type="text"
            placeholder={`Поиск в Каталоге.  Например, "умные часы"`}
            tabIndex={1}
            name="query"
            value={this.state.search}
            onChange={this.handleChangeInput}
          />
          <button className="fast-search__submit" type="submit">
            Найти
          </button>
        </form>
      </div>
    )
  }
}

export default Search
