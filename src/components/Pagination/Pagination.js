import React from 'react'

class Pagination extends React.Component {
  render() {
    return (
      <div className="schema-pagination schema-pagination_visible" id="schema-pagination">
        <a href="pp" className="schema-pagination__main">
          <span data-bind="text: $root.nextPageText">Следующие 30 товаров</span>
        </a>
        <div className="schema-pagination__secondary">
          <div
            className="schema-pagination__dropdown"
            data-bind="click: $root.toggleDropdown.bind($root)"
          >
            <div className="schema-pagination__dropdown-value" data-bind="text: $root.page.current">
              1
            </div>
            <div className="schema-pagination__dropdown-items" />
          </div>
        </div>
        <div
          className="schema-pagination__pages"
          data-bind="css: {'schema-pagination__pages_active': $root.isActiveDropdown}"
        >
          <div className="schema-pagination__pages-container mCustomScrollbar _mCS_1 mCS_no_scrollbar">
            <div
              id="mCSB_1"
              className="mCustomScrollBox mCS-light mCSB_horizontal mCSB_inside"
              tabIndex={0}
            >
              <div
                id="mCSB_1_container"
                className="mCSB_container mCS_x_hidden mCS_no_scrollbar_x"
                style={{
                  position: 'relative',
                  top: '0px',
                  left: '0px',
                  width: '0px',
                }}
                dir="ltr"
              >
                <ul
                  className="schema-pagination__pages-list"
                  data-bind="foreach: {data: $root.pages, as: 'number'}"
                >
                  <li
                    className="schema-pagination__pages-item schema-pagination__pages-item_active"
                    data-bind="css: {'schema-pagination__pages-item_active': $root.page.current() === number}"
                  >
                    <a
                      href="pp"
                      className="schema-pagination__pages-link"
                      data-bind="click: function () { $root.setPage(number) }, text: number"
                    >
                      1
                    </a>
                  </li>
                  <li
                    className="schema-pagination__pages-item"
                    data-bind="css: {'schema-pagination__pages-item_active': $root.page.current() === number}"
                  >
                    <a
                      href="pp"
                      className="schema-pagination__pages-link"
                      data-bind="click: function () { $root.setPage(number) }, text: number"
                    >
                      2
                    </a>
                  </li>
                  <li
                    className="schema-pagination__pages-item"
                    data-bind="css: {'schema-pagination__pages-item_active': $root.page.current() === number}"
                  >
                    <a
                      href="pp"
                      className="schema-pagination__pages-link"
                      data-bind="click: function () { $root.setPage(number) }, text: number"
                    >
                      3
                    </a>
                  </li>
                  <li
                    className="schema-pagination__pages-item"
                    data-bind="css: {'schema-pagination__pages-item_active': $root.page.current() === number}"
                  >
                    <a
                      href="pp"
                      className="schema-pagination__pages-link"
                      data-bind="click: function () { $root.setPage(number) }, text: number"
                    >
                      4
                    </a>
                  </li>
                  <li
                    className="schema-pagination__pages-item"
                    data-bind="css: {'schema-pagination__pages-item_active': $root.page.current() === number}"
                  >
                    <a
                      href="pp"
                      className="schema-pagination__pages-link"
                      data-bind="click: function () { $root.setPage(number) }, text: number"
                    >
                      5
                    </a>
                  </li>
                  <li
                    className="schema-pagination__pages-item"
                    data-bind="css: {'schema-pagination__pages-item_active': $root.page.current() === number}"
                  >
                    <a
                      href="pp"
                      className="schema-pagination__pages-link"
                      data-bind="click: function () { $root.setPage(number) }, text: number"
                    >
                      6
                    </a>
                  </li>
                  <li
                    className="schema-pagination__pages-item"
                    data-bind="css: {'schema-pagination__pages-item_active': $root.page.current() === number}"
                  >
                    <a
                      href="pp"
                      className="schema-pagination__pages-link"
                      data-bind="click: function () { $root.setPage(number) }, text: number"
                    >
                      7
                    </a>
                  </li>
                  <li
                    className="schema-pagination__pages-item"
                    data-bind="css: {'schema-pagination__pages-item_active': $root.page.current() === number}"
                  >
                    <a
                      href="pp"
                      className="schema-pagination__pages-link"
                      data-bind="click: function () { $root.setPage(number) }, text: number"
                    >
                      8
                    </a>
                  </li>
                  <li
                    className="schema-pagination__pages-item"
                    data-bind="css: {'schema-pagination__pages-item_active': $root.page.current() === number}"
                  >
                    <a
                      href="pp"
                      className="schema-pagination__pages-link"
                      data-bind="click: function () { $root.setPage(number) }, text: number"
                    >
                      9
                    </a>
                  </li>
                  <li
                    className="schema-pagination__pages-item"
                    data-bind="css: {'schema-pagination__pages-item_active': $root.page.current() === number}"
                  >
                    <a
                      href="pp"
                      className="schema-pagination__pages-link"
                      data-bind="click: function () { $root.setPage(number) }, text: number"
                    >
                      10
                    </a>
                  </li>
                  <li
                    className="schema-pagination__pages-item"
                    data-bind="css: {'schema-pagination__pages-item_active': $root.page.current() === number}"
                  >
                    <a
                      href="pp"
                      className="schema-pagination__pages-link"
                      data-bind="click: function () { $root.setPage(number) }, text: number"
                    >
                      11
                    </a>
                  </li>
                  <li
                    className="schema-pagination__pages-item"
                    data-bind="css: {'schema-pagination__pages-item_active': $root.page.current() === number}"
                  >
                    <a
                      href="pp"
                      className="schema-pagination__pages-link"
                      data-bind="click: function () { $root.setPage(number) }, text: number"
                    >
                      12
                    </a>
                  </li>
                </ul>
              </div>
              <div
                id="mCSB_1_scrollbar_horizontal"
                className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_horizontal"
                style={{
                  display: 'none',
                }}
              >
                <div className="mCSB_draggerContainer">
                  <div
                    id="mCSB_1_dragger_horizontal"
                    className="mCSB_dragger"
                    style={{
                      position: 'absolute',
                      minWidth: '30px',
                      left: '0px',
                    }}
                  >
                    <div className="mCSB_dragger_bar" />
                  </div>
                  <div className="mCSB_draggerRail" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pagination
