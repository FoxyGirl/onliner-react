import React from "react";

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
            placeholder="\u041F\u043E\u0438\u0441\u043A \u0432 \u041A\u0430\u0442\u0430\u043B\u043E\u0433\u0435."
            tabIndex={1}
            name="query"
            defaultValue
          />
          <input type="hidden" name="charset" defaultValue="utf-8" />
          <button className="fast-search__submit" type="submit">
            Найти
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
