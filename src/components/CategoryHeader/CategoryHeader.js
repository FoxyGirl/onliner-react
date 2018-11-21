import React from 'react'

class CategoryHeader extends React.Component {
  render() {
    return (
      <div className="schema-header">
        <div id="schema-segments" className="schema-filter" style={{}} data-bind="visible: true;">
          <div
            className="schema-filter__group"
            data-bind="foreach: { data: $root.segments(), as: 'segment' }"
          >
            <label className="schema-filter-control schema-filter-control_switcher">
              <input
                className="schema-filter-control__switcher-state"
                type="radio"
                data-bind="checked: $root.segmentKey,\n                          value: segment.key"
                defaultValue="catalog"
                name="ko_unique_1"
              />
              <span
                className="schema-filter-control__switcher-inner"
                data-bind="text: segment.name"
              >
                Каталог
              </span>
              {}
              {}
            </label>
            <label className="schema-filter-control schema-filter-control_switcher">
              <input
                className="schema-filter-control__switcher-state"
                type="radio"
                data-bind="checked: $root.segmentKey,\n                          value: segment.key"
                defaultValue="second"
                name="ko_unique_2"
              />
              <span
                className="schema-filter-control__switcher-inner"
                data-bind="text: segment.name"
              >
                Объявления
              </span>
              {}
              <span className="schema-filter__badge">NEW</span>
              {}
            </label>
          </div>
          {}
        </div>
        <div
          id="schema-top-button"
          className="schema-header__group"
          style={{
            display: 'none',
          }}
          data-bind="visible: $root.segmentKey() === 'second'"
        >
          <a
            href="https://catalog.onliner.by/used/create"
            className="button button_green button_base schema-header__button"
          >
            Разместить объявление
          </a>
        </div>
        <h1 className="schema-header__title">Умные часы и браслеты</h1>
      </div>
    )
  }
}

export default CategoryHeader
