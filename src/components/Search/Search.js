import React from 'react'

class Search extends React.Component {
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
            defaultValue=""
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
