import React from 'react'
import { connect } from 'react-redux'
import InfoLoader from 'src/components/InfoLoader'

class CategoryFilter extends React.Component {
  render() {
    const { isLoadingGoods, goods } = this.props
    return (
      <div className="schema-filter__wrapper">
        <div className="schema-filter" id="schema-filter" style={{}}>
          <div data-bind="template: {name: 'schema-filter-template__facets-list', data: $root.facets.general}">
            <div className="schema-filter__fieldset schema-filter__fieldset_decor">
              <div className="schema-filter__label">Каталог.Onliner</div>
              <div className="schema-filter__hint schema-filter__hint_alter">
                мобильное приложение
              </div>
              <div className="schema-filter__store">
                <div className="schema-filter__store-list">
                  <a
                    href="https://itunes.apple.com/app/apple-store/id1062235600?pt=118046116&ct=catalog-section&mt=8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="schema-filter__store-item schema-filter__store-item_apple"
                  />
                  <a
                    href="https://play.google.com/store/apps/details?id=by.onliner.catalog&referrer=utm_source%3Donliner%26utm_medium%3Dbanner%26utm_campaign%3Dcatalog-section%26anid%3Dadmob"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="schema-filter__store-item schema-filter__store-item_google"
                  />
                </div>
              </div>
            </div>
            <div className="schema-filter__fieldset schema-filter__fieldset_decor">
              <div className="schema-filter-collapse">
                <div className="schema-filter-collapse__list">
                  <div className="schema-filter-collapse__item">
                    <div className="schema-filter-collapse__header">
                      <div className="schema-filter__label">
                        <span>Город</span>
                      </div>
                      <div className="schema-filter__hint">только для объявлений</div>
                      {}
                    </div>
                    <div className="schema-filter-collapse__body">
                      {}
                      {}
                      {}
                      {}
                      <div className="schema-filter__facet">
                        <ul className="schema-filter__list">
                          {}
                          <li>
                            <label className="schema-filter__checkbox-item">
                              <span className="i-checkbox">
                                <input
                                  type="checkbox"
                                  className="i-checkbox__real"
                                  defaultValue={17030}
                                />
                                <span className="i-checkbox__faux" />
                              </span>
                              <span className="schema-filter__checkbox-text">Минск</span>
                            </label>
                          </li>
                          <li>
                            <label className="schema-filter__checkbox-item">
                              <span className="i-checkbox">
                                <input
                                  type="checkbox"
                                  className="i-checkbox__real"
                                  defaultValue={2458}
                                />
                                <span className="i-checkbox__faux" />
                              </span>
                              <span className="schema-filter__checkbox-text">Брест</span>
                            </label>
                          </li>
                          <li>
                            <label className="schema-filter__checkbox-item">
                              <span className="i-checkbox">
                                <input
                                  type="checkbox"
                                  className="i-checkbox__real"
                                  defaultValue={26099}
                                />
                                <span className="i-checkbox__faux" />
                              </span>
                              <span
                                className="schema-filter__checkbox-text"
                                data-bind="html: item.name"
                              >
                                Могилев
                              </span>
                            </label>
                          </li>
                          <li>
                            <label
                              className="schema-filter__checkbox-item"
                              data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                            >
                              <span className="i-checkbox">
                                <input
                                  type="checkbox"
                                  className="i-checkbox__real"
                                  data-bind="value: item.id, checked: facet.values"
                                  defaultValue={26103}
                                />
                                <span className="i-checkbox__faux" />
                              </span>
                              <span
                                className="schema-filter__checkbox-text"
                                data-bind="html: item.name"
                              >
                                Бобруйск
                              </span>
                            </label>
                          </li>
                          <li>
                            <label
                              className="schema-filter__checkbox-item"
                              data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                            >
                              <span className="i-checkbox">
                                <input
                                  type="checkbox"
                                  className="i-checkbox__real"
                                  data-bind="value: item.id, checked: facet.values"
                                  defaultValue={17025}
                                />
                                <span className="i-checkbox__faux" />
                              </span>
                              <span
                                className="schema-filter__checkbox-text"
                                data-bind="html: item.name"
                              >
                                Гродно
                              </span>
                            </label>
                          </li>
                          {}
                        </ul>
                        {}
                        <div
                          className="schema-filter-control schema-filter-control_more"
                          data-bind="click: facet.togglePopover.bind(facet)"
                        >
                          <div className="schema-filter-control__item">
                            Все
                            <span data-bind="text: facet.dictionary.count">10</span>
                            <span data-bind="text: $root.format.pluralForm(facet.dictionary.count, ['\u0432\u0430\u0440\u0438\u0430\u043D\u0442', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432'])">
                              вариантов
                            </span>
                          </div>
                        </div>
                        <div className="schema-filter-popover__wrapper">
                          <div
                            className="schema-filter-popover"
                            data-bind="css: {'schema-filter-popover_visible': facet.isPopoverOpened},\n                      click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                          >
                            <div className="schema-filter-popover__inner">
                              <div
                                className="schema-filter-popover__columns schema-filter-popover__columns_2"
                                data-bind="css: {'schema-filter-popover__columns_2': facet.dictionary.count <= 50,\n                                  'schema-filter-popover__columns_3': facet.dictionary.count > 50 && facet.dictionary.count <= 100,\n                                  'schema-filter-popover__columns_4': facet.dictionary.count > 100}"
                              >
                                {}
                                <div className="schema-filter-popover__column-item">
                                  {}
                                  {}
                                  <label
                                    className="schema-filter__checkbox-item"
                                    data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                                  >
                                    <span className="i-checkbox">
                                      <input
                                        type="checkbox"
                                        className="i-checkbox__real"
                                        data-bind="value: item.id, checked: facet.values"
                                        defaultValue={17030}
                                      />
                                      <span className="i-checkbox__faux" />
                                    </span>
                                    <span
                                      className="schema-filter__checkbox-text"
                                      data-bind="html: item.name"
                                    >
                                      Минск
                                    </span>
                                  </label>
                                </div>
                                <div className="schema-filter-popover__column-item">
                                  {}
                                  {}
                                  <label
                                    className="schema-filter__checkbox-item"
                                    data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                                  >
                                    <span className="i-checkbox">
                                      <input
                                        type="checkbox"
                                        className="i-checkbox__real"
                                        data-bind="value: item.id, checked: facet.values"
                                        defaultValue={2458}
                                      />
                                      <span className="i-checkbox__faux" />
                                    </span>
                                    <span
                                      className="schema-filter__checkbox-text"
                                      data-bind="html: item.name"
                                    >
                                      Брест
                                    </span>
                                  </label>
                                </div>
                                <div className="schema-filter-popover__column-item">
                                  {}
                                  {}
                                  <label
                                    className="schema-filter__checkbox-item"
                                    data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                                  >
                                    <span className="i-checkbox">
                                      <input
                                        type="checkbox"
                                        className="i-checkbox__real"
                                        data-bind="value: item.id, checked: facet.values"
                                        defaultValue={26099}
                                      />
                                      <span className="i-checkbox__faux" />
                                    </span>
                                    <span
                                      className="schema-filter__checkbox-text"
                                      data-bind="html: item.name"
                                    >
                                      Могилев
                                    </span>
                                  </label>
                                </div>
                                <div className="schema-filter-popover__column-item">
                                  {}
                                  {}
                                  <label
                                    className="schema-filter__checkbox-item"
                                    data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                                  >
                                    <span className="i-checkbox">
                                      <input
                                        type="checkbox"
                                        className="i-checkbox__real"
                                        data-bind="value: item.id, checked: facet.values"
                                        defaultValue={26103}
                                      />
                                      <span className="i-checkbox__faux" />
                                    </span>
                                    <span
                                      className="schema-filter__checkbox-text"
                                      data-bind="html: item.name"
                                    >
                                      Бобруйск
                                    </span>
                                  </label>
                                </div>
                                <div className="schema-filter-popover__column-item">
                                  {}
                                  {}
                                  <label
                                    className="schema-filter__checkbox-item"
                                    data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                                  >
                                    <span className="i-checkbox">
                                      <input
                                        type="checkbox"
                                        className="i-checkbox__real"
                                        data-bind="value: item.id, checked: facet.values"
                                        defaultValue={17025}
                                      />
                                      <span className="i-checkbox__faux" />
                                    </span>
                                    <span
                                      className="schema-filter__checkbox-text"
                                      data-bind="html: item.name"
                                    >
                                      Гродно
                                    </span>
                                  </label>
                                </div>
                                <div className="schema-filter-popover__column-item">
                                  {}
                                  {}
                                  <label
                                    className="schema-filter__checkbox-item"
                                    data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                                  >
                                    <span className="i-checkbox">
                                      <input
                                        type="checkbox"
                                        className="i-checkbox__real"
                                        data-bind="value: item.id, checked: facet.values"
                                        defaultValue={12370}
                                      />
                                      <span className="i-checkbox__faux" />
                                    </span>
                                    <span
                                      className="schema-filter__checkbox-text"
                                      data-bind="html: item.name"
                                    >
                                      Гомель
                                    </span>
                                  </label>
                                </div>
                                <div className="schema-filter-popover__column-item">
                                  {}
                                  {}
                                  <label
                                    className="schema-filter__checkbox-item"
                                    data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                                  >
                                    <span className="i-checkbox">
                                      <input
                                        type="checkbox"
                                        className="i-checkbox__real"
                                        data-bind="value: item.id, checked: facet.values"
                                        defaultValue={9387}
                                      />
                                      <span className="i-checkbox__faux" />
                                    </span>
                                    <span
                                      className="schema-filter__checkbox-text"
                                      data-bind="html: item.name"
                                    >
                                      Витебск
                                    </span>
                                  </label>
                                </div>
                                <div className="schema-filter-popover__column-item">
                                  {}
                                  {}
                                  <label
                                    className="schema-filter__checkbox-item"
                                    data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                                  >
                                    <span className="i-checkbox">
                                      <input
                                        type="checkbox"
                                        className="i-checkbox__real"
                                        data-bind="value: item.id, checked: facet.values"
                                        defaultValue={15116}
                                      />
                                      <span className="i-checkbox__faux" />
                                    </span>
                                    <span
                                      className="schema-filter__checkbox-text"
                                      data-bind="html: item.name"
                                    >
                                      Островец
                                    </span>
                                  </label>
                                </div>
                                <div className="schema-filter-popover__column-item">
                                  {}
                                  {}
                                  <label
                                    className="schema-filter__checkbox-item"
                                    data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                                  >
                                    <span className="i-checkbox">
                                      <input
                                        type="checkbox"
                                        className="i-checkbox__real"
                                        data-bind="value: item.id, checked: facet.values"
                                        defaultValue={12377}
                                      />
                                      <span className="i-checkbox__faux" />
                                    </span>
                                    <span
                                      className="schema-filter__checkbox-text"
                                      data-bind="html: item.name"
                                    >
                                      Мозырь
                                    </span>
                                  </label>
                                </div>
                                <div className="schema-filter-popover__column-item">
                                  {}
                                  {}
                                  <label
                                    className="schema-filter__checkbox-item"
                                    data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                                  >
                                    <span className="i-checkbox">
                                      <input
                                        type="checkbox"
                                        className="i-checkbox__real"
                                        data-bind="value: item.id, checked: facet.values"
                                        defaultValue={22666}
                                      />
                                      <span className="i-checkbox__faux" />
                                    </span>
                                    <span
                                      className="schema-filter__checkbox-text"
                                      data-bind="html: item.name"
                                    >
                                      Борисов
                                    </span>
                                  </label>
                                </div>
                                {}
                              </div>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                      {}
                      {}
                      {}
                      {}
                      {}
                      {}
                      {}
                      {}
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset schema-filter__fieldset_boolean-checkbox"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__boolean', data: facet}"
              >
                {}
                <label className="schema-filter__checkbox-item">
                  <span className="i-checkbox">
                    <input
                      type="checkbox"
                      className="i-checkbox__real"
                      data-bind="checked: $data.value() === '1', event: {change: $data.change.bind($data, '1', $element)}"
                    />
                    <span className="i-checkbox__faux" />
                  </span>
                  <span
                    className="schema-filter__checkbox-text"
                    data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')"
                  >
                    С доставкой по Беларуси
                  </span>
                </label>
                {}
                {}
                {}
              </div>
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                <span data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')">
                  Производитель
                </span>
                {}
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__dictionary', data: facet}"
              >
                <ul className="schema-filter__list">
                  {}
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="xiaomi"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Xiaomi
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="samsung"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Samsung
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="apple"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Apple
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="fitbit"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Fitbit
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="polarelectro"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Polar
                      </span>
                    </label>
                  </li>
                  {}
                </ul>
                {}
                <div
                  className="schema-filter-control schema-filter-control_more"
                  data-bind="click: facet.togglePopover.bind(facet)"
                >
                  <div className="schema-filter-control__item">
                    Все
                    <span data-bind="text: facet.dictionary.count">104</span>
                    <span data-bind="text: $root.format.pluralForm(facet.dictionary.count, ['\u0432\u0430\u0440\u0438\u0430\u043D\u0442', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432'])">
                      варианта
                    </span>
                  </div>
                </div>
                <div className="schema-filter-popover__wrapper">
                  <div
                    className="schema-filter-popover"
                    data-bind="css: {'schema-filter-popover_visible': facet.isPopoverOpened},\n                      click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                  >
                    <div className="schema-filter-popover__inner">
                      <div
                        className="schema-filter-popover__columns schema-filter-popover__columns_4"
                        data-bind="css: {'schema-filter-popover__columns_2': facet.dictionary.count <= 50,\n                                  'schema-filter-popover__columns_3': facet.dictionary.count > 50 && facet.dictionary.count <= 100,\n                                  'schema-filter-popover__columns_4': facet.dictionary.count > 100}"
                      >
                        {}
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            a
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="acer"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Acer
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="acme"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              ACME
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="adidas"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Adidas
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="agu"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              AGU
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="aimoto"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Aimoto
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="alcatel"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Alcatel
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="huami"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Amazfit
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="apple"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Apple
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="asus"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              ASUS
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            b
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="belsis"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Belsis
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="beluvv"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              BeLuvv
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="beurer"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Beurer
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="bizzaro"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Bizzaro
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="bq"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              BQ-Mobile
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="bradex"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Bradex
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            c
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="cat_electronics"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Cat
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="cogito"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Cogito
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="croise"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Croise
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            d
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="da"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              D&A
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="dexp"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              DEXP
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="dfc"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              DFC
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="diggro"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Diggro
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            e
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="elari"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Elari
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="elephone"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Elephone
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="emporioarmani"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Emporio Armani
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="epson"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Epson
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="espada"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Espada
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            f
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="findmybaby"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              FindMyBaby
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="fitbit"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Fitbit
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="fixitime"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Fixitime
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="fossil"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Fossil
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            g
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="garmin"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Garmin
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="gator"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Gator
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="geak"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Geak
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="ginzzu"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Ginzzu
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="globus"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Globus
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="gpsbaby"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              GPS Baby
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            h
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="harper"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Harper
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="healbe"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Healbe
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="hiper"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Hiper
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="honor"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Honor
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="huawei"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Huawei
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            i
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="ihealth"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              iHealth
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="iwown"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              iWOWN
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            j
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="jawbone"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Jawbone
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="jetdevice"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              JET
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            k
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="kingwear"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              KingWear
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            l
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="lemfo"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Lemfo
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="lenovo"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Lenovo
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="lexand"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Lexand
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="lg"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              LG
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="lichip"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Lichip
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="lime"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Lime
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            m
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="meizu"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              MEIZU
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="merlin_vendor"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Merlin
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="microsoft"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Microsoft
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="mio"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Mio
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="miru"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Miru
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="misfit"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Misfit
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="monkeyg"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              MonkeyG
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="motorola"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Motorola
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="mykronoz"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              MyKronoz
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="myrope"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              MyRope
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            n
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="nexlalimited"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Nexla
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="nikeplus"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Nike+
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="no1"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              NO.1
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="nokia"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Nokia
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="nuband"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Nuband
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            o
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="omron"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Omron
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="onetrak"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Onetrak
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            p
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="palmexx"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Palmexx
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="pandora"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Pandora
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="pebble"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Pebble
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="polarelectro"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Polar
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="prolike"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Prolike
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            q
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="qstar"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Qstar
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            r
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="razer"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Razer
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="remax"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Remax
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="rooti"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Rooti
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="rovermate"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              RoverMate
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            s
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="samsung"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Samsung
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="savori"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Savori
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="smartbabywatch"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Smart Baby Watch
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="snopow"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Snopow
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="sony"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Sony
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="sovo"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              SOVO
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="striiv"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Striiv
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="supra"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Supra
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="suunto"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Suunto
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            t
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="tagheuer"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              TAG Heuer
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="teslawatch"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Teslawatch
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="tiptop"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              TipTop
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="titanw"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Titan Watch
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="tomtom"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              TomTom
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            v
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="venso"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Venso
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="vidonn"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Vidonn
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            w
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="watchtech"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Watchtech
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="wise"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Wise
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="withings"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Withings
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="wokka"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Wokka
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="wonlex"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Wonlex
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            x
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="xiaomi"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Xiaomi
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            к
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="karkam"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              КАРКАМ
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="knopka24"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Кнопка жизни
                            </span>
                          </label>
                        </div>
                        {}
                      </div>
                    </div>
                  </div>
                </div>
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                {}
                {}
                <span data-bind="html: facet.segment_related_name[$root.activeSegment()] + (facet.unit ? ', ' + facet.unit : '')">
                  Минимальная цена в предложениях магазинов
                </span>
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__number-range', data: facet}"
              >
                {}
                <ul className="schema-filter__list">
                  {}
                  {}
                </ul>
                {}
                <div className="schema-filter__group">
                  <div className="schema-filter-control schema-filter-control_input">
                    <input
                      className="schema-filter-control__item schema-filter__number-input schema-filter__number-input_price"
                      type="text"
                      data-bind="value: facet.value.from,\n                          attr: {placeholder: !facet.value.to() && (facet.placeholder.from || '\u043E\u0442')},\n                          click: facet.onClick.bind(facet),\n                          css: {'schema-filter__number-input_price': facet.parameterId === 'price'},\n                          valueUpdate: 'keyup'"
                      placeholder="\u043E\u0442"
                    />
                    <span className="schema-filter-control__shadow" />
                  </div>
                  <div className="schema-filter-control schema-filter-control_input">
                    <input
                      className="schema-filter-control__item schema-filter__number-input schema-filter__number-input_price"
                      type="text"
                      data-bind="value: facet.value.to,\n                          attr: {placeholder: !facet.value.from() && (facet.placeholder.to || '\u0434\u043E')},\n                          click: facet.onClick.bind(facet),\n                          css: {'schema-filter__number-input_price': facet.parameterId === 'price'},\n                          valueUpdate: 'keyup'"
                    />
                    <span className="schema-filter-control__shadow" />
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                <span data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')">
                  Магазины
                </span>
                {}
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__dictionary', data: facet}"
              >
                <ul className="schema-filter__list">
                  {}
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue={256}
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Мобилайн
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue={8503}
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Vbox.by
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue={163}
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        PHOTOSHOP
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue={14913}
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        XIAOMI-STORE.BY
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue={707}
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Agroup.by
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue={196}
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        FOTOMIX.BY
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue={2118}
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        TTN.by
                      </span>
                    </label>
                  </li>
                  {}
                </ul>
                {}
                <div
                  className="schema-filter-control schema-filter-control_more"
                  data-bind="click: facet.togglePopover.bind(facet)"
                >
                  <div className="schema-filter-control__item">
                    Все
                    <span data-bind="text: facet.dictionary.count">39</span>
                    <span data-bind="text: $root.format.pluralForm(facet.dictionary.count, ['\u0432\u0430\u0440\u0438\u0430\u043D\u0442', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432'])">
                      вариантов
                    </span>
                  </div>
                </div>
                <div className="schema-filter-popover__wrapper">
                  <div
                    className="schema-filter-popover"
                    data-bind="css: {'schema-filter-popover_visible': facet.isPopoverOpened},\n                      click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                  >
                    <div className="schema-filter-popover__inner">
                      <div
                        className="schema-filter-popover__columns schema-filter-popover__columns_2"
                        data-bind="css: {'schema-filter-popover__columns_2': facet.dictionary.count <= 50,\n                                  'schema-filter-popover__columns_3': facet.dictionary.count > 50 && facet.dictionary.count <= 100,\n                                  'schema-filter-popover__columns_4': facet.dictionary.count > 100}"
                      >
                        {}
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            2
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={965}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              21vek.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            5
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={3467}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              5 элемент
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            a
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={707}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Agroup.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={1689}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              AMD.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            b
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={16114}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              beurer-belarus.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={1791}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              bigi
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            f
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={196}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              FOTOMIX.BY
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            g
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={3319}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Garmin
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={3502}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              giz.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={3035}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              GPSnavi.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={15923}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              gsmart
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            i
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={15697}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              i-product.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={581}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              imarket.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={16252}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              iq-trend.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            m
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={16297}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              mi.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            n
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={10840}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              New-Store.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={8569}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              NewPhone
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={382}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              NOVATEK
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            p
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={163}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              PHOTOSHOP
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            s
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={14339}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              smartbalance.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={15000}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Smartfriend.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={15854}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Smartstore
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={1378}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              SOCKET.BY
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            t
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={197}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              TDM.BY
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={2118}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              TTN.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            v
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={8503}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Vbox.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={147}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              ViP MARKET
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            w
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={7088}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              WAVESTORE.BY
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            x
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={14913}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              XIAOMI-STORE.BY
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={14216}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              xistore.by
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            е
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={1462}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Европа
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            м
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={15752}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Магазин Мобильные Штучки
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={698}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Мегастор
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={256}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Мобилайн
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            н
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={1425}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              НА СВЯЗИ
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            с
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={232}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              СТБ Mobile
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            т
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={1702}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Телефоника
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={15932}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              ТЕХНО Плюс
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          <div
                            className="schema-filter-popover__column-letter"
                            data-bind="text: item.letter"
                          >
                            ф
                          </div>
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue={1042}
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              Фотомагазин
                            </span>
                          </label>
                        </div>
                        {}
                      </div>
                    </div>
                  </div>
                </div>
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Дата выхода на рынок
                    </div>
                    <div data-bind="html: facet.description">
                      Дата выхода модели на рынок, независимо от региона. Необходимо учитывать, что
                      появление продукта не всегда происходит одновременно во всех регионах.
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                <span data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')">
                  Дата выхода на рынок, года
                </span>
                {}
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__number-range', data: facet}"
              >
                {}
                <ul className="schema-filter__list">
                  {}
                  {}
                </ul>
                {}
                <div className="schema-filter__group">
                  <div className="schema-filter-control schema-filter-control_input">
                    <input
                      className="schema-filter-control__item schema-filter__number-input"
                      type="text"
                      data-bind="value: facet.value.from,\n                          attr: {placeholder: !facet.value.to() && (facet.placeholder.from || '\u043E\u0442')},\n                          click: facet.onClick.bind(facet),\n                          css: {'schema-filter__number-input_price': facet.parameterId === 'price'},\n                          valueUpdate: 'keyup'"
                      placeholder={2011}
                    />
                    <span className="schema-filter-control__shadow" />
                  </div>
                  <div className="schema-filter-control schema-filter-control_input">
                    <input
                      className="schema-filter-control__item schema-filter__number-input"
                      type="text"
                      data-bind="value: facet.value.to,\n                          attr: {placeholder: !facet.value.from() && (facet.placeholder.to || '\u0434\u043E')},\n                          click: facet.onClick.bind(facet),\n                          css: {'schema-filter__number-input_price': facet.parameterId === 'price'},\n                          valueUpdate: 'keyup'"
                      placeholder={2018}
                    />
                    <span className="schema-filter-control__shadow" />
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Тип
                    </div>
                    <div data-bind="html: facet.description">
                      Среди "умных" устройств, носимых на руке, можно выделить:
                      <br />
                      <br />
                      1) часы-телефон: устройства, внешне напоминающие часы, но выполняющие более
                      разнообразные функции, помимо отображения времени. Полноценно функционируют
                      без смартфонов. Модели этого типа всегда оснащены слотом для SIM-карты.
                      <br />
                      <br />
                      2) часы-компаньон: устройства, для полноценной работы требующее подключения к
                      смартфону, часто определенного производителя и модели. Используя ресурсы
                      смартфона, часы способны выполнять различные действия - от приема звонков до
                      навигации;
                      <br />
                      <br />
                      3) фитнес-часы: устройства, предназначенные для отслеживания различных
                      показателей при физической нагрузке без устройств-компаньонов. Как правило,
                      оснащены встроенным GPS-приемником.
                      <br />
                      <br />
                      4) фитнес-браслет: устройства, схожие по функциям с фитнес-часами, но
                      выполненные в виде браслета.
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                <span data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')">
                  Тип
                </span>
                {}
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__dictionary', data: facet}"
              >
                <ul className="schema-filter__list">
                  {}
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="watch"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        часы-компаньон
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="smartphonewatch"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        часы-телефон
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="bracelet"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        фитнес-браслет
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="fitwatch"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        фитнес-часы
                      </span>
                    </label>
                  </li>
                  {}
                </ul>
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Программная платформа
                    </div>
                    <div data-bind="html: facet.description">
                      "Умные" часы выпускаются на различных программных платформах. Каждая из
                      платформ имеет свои особенности и свои перспективы дальнейшего развития.
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                <span data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')">
                  Программная платформа
                </span>
                {}
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__dictionary', data: facet}"
              >
                <ul className="schema-filter__list">
                  {}
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="android"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Android
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="androidwear"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Android Wear
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="tizen"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Tizen
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="watchos"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Watch OS
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="proprietary"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        проприетарная
                      </span>
                    </label>
                  </li>
                  {}
                </ul>
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Поддержка программных платформ
                    </div>
                    <div data-bind="html: facet.description">
                      "Умные" часы и подобные им устройства предназначены для взаимодействия со
                      смартфонами, планшетами и другими мобильными компьютерами. Взаимодействие
                      возможно только при наличии соответственного программного обеспечения для этих
                      компьютеров. Существует несколько программных платформ для мобильных
                      устройств, не совместимых между собой.
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                <span data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')">
                  Поддержка программных платформ
                </span>
                {}
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__dictionary', data: facet}"
              >
                <ul className="schema-filter__list">
                  {}
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="android"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Android
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="ios"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        iOS
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="osx"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Mac OS X
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="win"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Windows
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="tizen"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Tizen
                      </span>
                    </label>
                  </li>
                  {}
                </ul>
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      С SIM-картой
                    </div>
                    <div data-bind="html: facet.description">
                      Умные часы с SIM-картой в отличие от обычных смарт-часов способны работать без
                      смартфона, и их можно использовать для совершения звонков и отправления
                      текстовых сообщений. Весьма удобное решение — гаджет всегда на руке, а значит,
                      его сложно потерять. Для этого используются SIM-карты форматов micro-SIM и
                      nano-SIM — это миниатюрные SIM-карты размером 15x12 и 12,3x8,8 мм
                      соответственно, с улучшенными параметрами безопасности.
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                <span data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')">
                  С SIM-картой
                </span>
                {}
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__dictionary', data: facet}"
              >
                <ul className="schema-filter__list">
                  {}
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="microsim"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        micro-SIM
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="nanosim"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        nano-SIM
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="esim"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        e-SIM
                      </span>
                    </label>
                  </li>
                  {}
                </ul>
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset schema-filter__fieldset_boolean-checkbox"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Для детей
                    </div>
                    <div data-bind="html: facet.description">
                      Детские умные часы предназначены для постоянной связи с ребенком и
                      отслеживания его местоположения. Исходя из основных функций имеют несколько
                      отличительных особенностей:
                      <br />
                      1) наличие слота под сим-карту и поддержка голосовых вызовов;
                      <br />
                      2) наличие GPS-сенсора;
                      <br />
                      3) наличие кнопки SOS для экстренных случаев.
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__boolean', data: facet}"
              >
                {}
                <label className="schema-filter__checkbox-item">
                  <span className="i-checkbox">
                    <input
                      type="checkbox"
                      className="i-checkbox__real"
                      data-bind="checked: $data.value() === '1', event: {change: $data.change.bind($data, '1', $element)}"
                    />
                    <span className="i-checkbox__faux" />
                  </span>
                  <span
                    className="schema-filter__checkbox-text"
                    data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')"
                  >
                    Для детей
                  </span>
                </label>
                {}
                {}
                {}
              </div>
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset schema-filter__fieldset_boolean-checkbox"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      GPS
                    </div>
                    <div data-bind="html: facet.description">
                      GPS — глобальная система позиционирования, использующая спутники Министерства
                      обороны США. Позволяет определять координаты в пространстве при условии
                      беспрепятственного получения сигнала от нескольких спутников. Вследствие этого
                      может не работать внутри зданий, в туннелях, при условии плотной облачности и
                      т.д.
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__boolean', data: facet}"
              >
                {}
                <label className="schema-filter__checkbox-item">
                  <span className="i-checkbox">
                    <input
                      type="checkbox"
                      className="i-checkbox__real"
                      data-bind="checked: $data.value() === '1', event: {change: $data.change.bind($data, '1', $element)}"
                    />
                    <span className="i-checkbox__faux" />
                  </span>
                  <span
                    className="schema-filter__checkbox-text"
                    data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')"
                  >
                    GPS
                  </span>
                </label>
                {}
                {}
                {}
              </div>
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset schema-filter__fieldset_boolean-checkbox"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Умный будильник
                    </div>
                    <div data-bind="html: facet.description">
                      Функция "умный будильник" вызывает пробуждение пользователя при помощи
                      вибрации в наиболее благоприятное время - в фазе легкого сна.
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__boolean', data: facet}"
              >
                {}
                <label className="schema-filter__checkbox-item">
                  <span className="i-checkbox">
                    <input
                      type="checkbox"
                      className="i-checkbox__real"
                      data-bind="checked: $data.value() === '1', event: {change: $data.change.bind($data, '1', $element)}"
                    />
                    <span className="i-checkbox__faux" />
                  </span>
                  <span
                    className="schema-filter__checkbox-text"
                    data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')"
                  >
                    Умный будильник
                  </span>
                </label>
                {}
                {}
                {}
              </div>
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset schema-filter__fieldset_boolean-checkbox"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Пульсометр
                    </div>
                    <div data-bind="html: facet.description">
                      Датчик сокращений сердца, используемый для контроля за физической нагрузкой.
                      Может быть как встроенным, так и подключаемым извне.
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__boolean', data: facet}"
              >
                {}
                <label className="schema-filter__checkbox-item">
                  <span className="i-checkbox">
                    <input
                      type="checkbox"
                      className="i-checkbox__real"
                      data-bind="checked: $data.value() === '1', event: {change: $data.change.bind($data, '1', $element)}"
                    />
                    <span className="i-checkbox__faux" />
                  </span>
                  <span
                    className="schema-filter__checkbox-text"
                    data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')"
                  >
                    Пульсометр
                  </span>
                </label>
                {}
                {}
                {}
              </div>
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Технология экрана
                    </div>
                    <div data-bind="html: facet.description">
                      В мобильных устройствах применяются две принципиально отличающиеся технологии
                      экрана: жидкокристаллическая LCD и органическая OLED. <br />
                      <br />В зависимости от реализации и технологии изготовления существуют
                      следующие варианты ЖК-экранов:
                      <br />
                      <br />
                      1) STN — дешевая и старая пассивно-матричная технология;
                      <br />
                      2) CSTN — цветной вариант STN;
                      <br />
                      3) FSTN, UBC, UFB и др. — улучшенные версия STN с добавлением дополнительного
                      слоя, повышающего контрастность и углы обзора;
                      <br />
                      4) TFD — дешевая активно-матричная технология на тонкопленочных диодах,
                      обеспечивающая худшую цветопередачу и контрастность по сравнению с TFT;
                      <br />
                      5) TFT — активно-матричная технология на тонкопленочных транзисторах,
                      существующая в следующих вариантах:
                      <br />– TN (Twisted Nematics) — самая простая и дешевая технология,
                      отличающаяся высокой скоростью переключения пикселей, но малыми углами обзора
                      и сравнительно низкой контрастностью; обычно если производитель указывает
                      технологию TFT, имеется в виду именно TN;
                      <br />– IPS (In-Plane Switching) — более сложная и дорогая технология,
                      обеспечивающая отличные углы обзора и хорошую цветопередачу, но худшие
                      показатели по контрасту и скорости переключения пикселей, является разработкой
                      Hitachi;
                      <br />– PLS (Plane Line Switching) — технология, аналогичная IPS, но
                      разработанная Samsung;
                      <br />– MVA (Multi-domain Vertical Alignment) и другие варианты VA —
                      альтернативная технология, обеспечивающая наилучшую контрастность и нормальные
                      углы обзора, но имеющая низкую скорость переключения пикселей и не самую
                      идеальную цветопередачу;
                      <br />– ASV (Advanced Super View) — технология, похожая на MVA, но
                      обеспечивающая лучшие углы обзора и хорошую цветопередачу, разработка Sharp.
                      <br />
                      <br />
                      Технология OLED (AMOLED) принципиально отличается от LCD тем, что вместо ячеек
                      с жидкими кристаллами, играющих роль управляемых затворов перед лампой
                      подсветки, в OLED сами ячейки излучают свет. Благодаря этому у OLED нет
                      проблем ни с углами обзора, ни с временем отклика, но остается проблема
                      мерцания и выгорания экрана. В мобильных устройствах используется
                      активно-матричная технология AMOLED в разных вариантах реализации.
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                <span data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')">
                  Технология экрана
                </span>
                {}
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__dictionary', data: facet}"
              >
                <ul className="schema-filter__list">
                  {}
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="tft"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        TFT
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="ips"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        IPS
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="amoled"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        AMOLED
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="oled22"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        OLED
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="eink"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        E-Ink
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="ledled"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        LED
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="memorylcd"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        Memory LCD
                      </span>
                    </label>
                  </li>
                  {}
                </ul>
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset schema-filter__fieldset_boolean-checkbox"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Сенсорный экран
                    </div>
                    <div data-bind="html: facet.description">
                      Сенсорный экран реагирует на прикосновения пальца. Существует несколько
                      разновидностей технологий, позволяющих реализовать сенсорный экран.
                      <br />
                      <br />
                      1. Резистивная технология основана на измерении сопротивления между экраном и
                      нанесенной поверх него мембраны. В месте нажатия мембрана прижимается к
                      экрану, в результате чего сопротивление уменьшается. Данная технология дешевая
                      и надежная, регистрирует нажатия любым твердым предметом, но обладает целым
                      рядом недостатков: увеличивается толщина экрана, снижается яркость и
                      цветопередача, требуется определенное усилие для срабатывания. Кроме того, для
                      резистивного экрана затруднительно реализовать мультитач, особенно более чем
                      для двух пальцев.
                      <br />
                      <br />
                      2. Ёмкостная (проекционно-ёмкостная) технология лишена большинства недостатков
                      резистивной. Она использует принцип измерения ёмкости, образуемой нижним
                      токопроводящим слоем, слоем стекла и прижатым с стеклу предметом. Отсутствие
                      нанесенной сверху мембраны снимает ограничения на силу нажатия, однако
                      ёмкостный экран реагирует только на токопроводящий предмет (например, палец).
                      Емкостные экраны применяются в подавляющем большинстве мобильных устройств.
                      <br />
                      <br />
                      3. Индукционный экран требует применения специального пера. Благодаря
                      возможности измерения силы нажатия он обычно применяется в графических
                      планшетах.
                      <br />
                      <br />
                      4. Инфракрасный экран использует принцип сканирования невидимых ИК-лучей,
                      распространяющихся над поверхностью экрана. Он применяется там, где не нужна
                      высокая точность, но желательно избавиться от любых дополнительных слоев
                      экрана, например в электронных книгах на основе E-Ink.
                      <br />
                      <br />
                      5. Технология мультитач (от англ. Multi-touch — «множественное касание»)
                      осуществляет одновременное определение координат двух и более точек касания,
                      что позволяет изменять масштаб изображения на экране, поворачивать объекты и
                      выполнять различные дополнительные функции.
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__boolean', data: facet}"
              >
                {}
                <label className="schema-filter__checkbox-item">
                  <span className="i-checkbox">
                    <input
                      type="checkbox"
                      className="i-checkbox__real"
                      data-bind="checked: $data.value() === '1', event: {change: $data.change.bind($data, '1', $element)}"
                    />
                    <span className="i-checkbox__faux" />
                  </span>
                  <span
                    className="schema-filter__checkbox-text"
                    data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')"
                  >
                    Сенсорный экран
                  </span>
                </label>
                {}
                {}
                {}
              </div>
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset schema-filter__fieldset_boolean-checkbox"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Постоянная работа экрана
                    </div>
                    <div data-bind="html: facet.description">
                      Не во всех "умных" часах экран работает постоянно. В некоторых моделях он
                      включается только по необходимости, а остальное время остается темным.
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__boolean', data: facet}"
              >
                {}
                <label className="schema-filter__checkbox-item">
                  <span className="i-checkbox">
                    <input
                      type="checkbox"
                      className="i-checkbox__real"
                      data-bind="checked: $data.value() === '1', event: {change: $data.change.bind($data, '1', $element)}"
                    />
                    <span className="i-checkbox__faux" />
                  </span>
                  <span
                    className="schema-filter__checkbox-text"
                    data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')"
                  >
                    Постоянная работа экрана
                  </span>
                </label>
                {}
                {}
                {}
              </div>
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Материал корпуса
                    </div>
                    <div data-bind="html: facet.description">Материал корпуса.</div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                <span data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')">
                  Материал корпуса
                </span>
                {}
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__dictionary', data: facet}"
              >
                <ul className="schema-filter__list">
                  {}
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="plastic"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        пластик
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="met"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        металл
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="rezina"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        резина
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="aluminum"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        алюминий
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="inox"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        сталь
                      </span>
                    </label>
                  </li>
                  {}
                </ul>
                {}
                <div
                  className="schema-filter-control schema-filter-control_more"
                  data-bind="click: facet.togglePopover.bind(facet)"
                >
                  <div className="schema-filter-control__item">
                    Все
                    <span data-bind="text: facet.dictionary.count">9</span>
                    <span data-bind="text: $root.format.pluralForm(facet.dictionary.count, ['\u0432\u0430\u0440\u0438\u0430\u043D\u0442', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432'])">
                      вариантов
                    </span>
                  </div>
                </div>
                <div className="schema-filter-popover__wrapper">
                  <div
                    className="schema-filter-popover"
                    data-bind="css: {'schema-filter-popover_visible': facet.isPopoverOpened},\n                      click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                  >
                    <div className="schema-filter-popover__inner">
                      <div
                        className="schema-filter-popover__columns schema-filter-popover__columns_2"
                        data-bind="css: {'schema-filter-popover__columns_2': facet.dictionary.count <= 50,\n                                  'schema-filter-popover__columns_3': facet.dictionary.count > 50 && facet.dictionary.count <= 100,\n                                  'schema-filter-popover__columns_4': facet.dictionary.count > 100}"
                      >
                        {}
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="plastic"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              пластик
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="met"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              металл
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="rezina"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              резина
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="aluminum"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              алюминий
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="inox"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              сталь
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="gold"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              золото
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="fiberglass"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              стекловолокно
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="ceramic"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              керамика
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="titan"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              титан
                            </span>
                          </label>
                        </div>
                        {}
                      </div>
                    </div>
                  </div>
                </div>
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Цвет корпуса
                    </div>
                    <div data-bind="html: facet.description">Цвет корпуса.</div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                <span data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')">
                  Цвет корпуса
                </span>
                {}
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__dictionary', data: facet}"
              >
                <ul className="schema-filter__list">
                  {}
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="lightblue"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        голубой
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="silv"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        серебристый
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="gold"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        золотой
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="black"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        черный
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="orange"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        оранжевый
                      </span>
                    </label>
                  </li>
                  {}
                </ul>
                {}
                <div
                  className="schema-filter-control schema-filter-control_more"
                  data-bind="click: facet.togglePopover.bind(facet)"
                >
                  <div className="schema-filter-control__item">
                    Все
                    <span data-bind="text: facet.dictionary.count">20</span>
                    <span data-bind="text: $root.format.pluralForm(facet.dictionary.count, ['\u0432\u0430\u0440\u0438\u0430\u043D\u0442', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432'])">
                      вариантов
                    </span>
                  </div>
                </div>
                <div className="schema-filter-popover__wrapper">
                  <div
                    className="schema-filter-popover"
                    data-bind="css: {'schema-filter-popover_visible': facet.isPopoverOpened},\n                      click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                  >
                    <div className="schema-filter-popover__inner">
                      <div
                        className="schema-filter-popover__columns schema-filter-popover__columns_2"
                        data-bind="css: {'schema-filter-popover__columns_2': facet.dictionary.count <= 50,\n                                  'schema-filter-popover__columns_3': facet.dictionary.count > 50 && facet.dictionary.count <= 100,\n                                  'schema-filter-popover__columns_4': facet.dictionary.count > 100}"
                      >
                        {}
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="lightblue"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              голубой
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="silv"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              серебристый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="gold"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              золотой
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="black"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              черный
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="orange"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              оранжевый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="red"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              красный
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="gray"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              серый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="white"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              белый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="violet"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              фиолетовый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="blue"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              синий
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="green"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              зеленый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="brown"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              коричневый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="pink"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              розовый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="yellow"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              желтый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="turquoise"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              бирюзовый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="titanic"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              титановый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="copper"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              медный
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="lilac"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              сиреневый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="darkblue"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              темно-синий
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="bordo"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              бордовый
                            </span>
                          </label>
                        </div>
                        {}
                      </div>
                    </div>
                  </div>
                </div>
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Материал браслета
                    </div>
                    <div data-bind="html: facet.description">Материал браслета.</div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                <span data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')">
                  Материал браслета
                </span>
                {}
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__dictionary', data: facet}"
              >
                <ul className="schema-filter__list">
                  {}
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="rezina"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        резина
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="silicone"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        силикон
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="plastic"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        пластик
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="metal"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        металл
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="leather"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        кожа
                      </span>
                    </label>
                  </li>
                  {}
                </ul>
                {}
                <div
                  className="schema-filter-control schema-filter-control_more"
                  data-bind="click: facet.togglePopover.bind(facet)"
                >
                  <div className="schema-filter-control__item">
                    Все
                    <span data-bind="text: facet.dictionary.count">9</span>
                    <span data-bind="text: $root.format.pluralForm(facet.dictionary.count, ['\u0432\u0430\u0440\u0438\u0430\u043D\u0442', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432'])">
                      вариантов
                    </span>
                  </div>
                </div>
                <div className="schema-filter-popover__wrapper">
                  <div
                    className="schema-filter-popover"
                    data-bind="css: {'schema-filter-popover_visible': facet.isPopoverOpened},\n                      click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                  >
                    <div className="schema-filter-popover__inner">
                      <div
                        className="schema-filter-popover__columns schema-filter-popover__columns_2"
                        data-bind="css: {'schema-filter-popover__columns_2': facet.dictionary.count <= 50,\n                                  'schema-filter-popover__columns_3': facet.dictionary.count > 50 && facet.dictionary.count <= 100,\n                                  'schema-filter-popover__columns_4': facet.dictionary.count > 100}"
                      >
                        {}
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="rezina"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              резина
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="silicone"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              силикон
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="plastic"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              пластик
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="metal"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              металл
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="leather"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              кожа
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="nylon"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              нейлон
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="cloth"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              ткань
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="titanium"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              титан
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="fluoroelastomer"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              фторэластомер
                            </span>
                          </label>
                        </div>
                        {}
                      </div>
                    </div>
                  </div>
                </div>
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
            <div
              className="schema-filter__fieldset"
              data-bind="css: {'schema-filter__fieldset_boolean-checkbox': facet.boolType === 'checkbox',\n                          'schema-filter__fieldset_decor': facet.isDecorated }"
            >
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter-help"
                data-bind="css: {'schema-filter-help_opened': facet.isHelpPopoverOpened}"
              >
                <div
                  className="schema-filter-help__trigger"
                  data-bind="click: facet.toggleHelpPopover.bind(facet)"
                />
                <div
                  className="schema-filter-help__popover"
                  data-bind="click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                >
                  <div className="schema-filter-help__inner">
                    <div className="schema-filter-help__title" data-bind="html: facet.name">
                      Цвет браслета
                    </div>
                    <div data-bind="html: facet.description">Цвет браслета.</div>
                  </div>
                </div>
              </div>
              {}
              {}
              {}
              <div className="schema-filter__label">
                {}
                <span data-bind="html: facet.name + (facet.unit ? ', ' + facet.unit : '')">
                  Цвет браслета
                </span>
                {}
                {}
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              <div
                className="schema-filter__facet"
                data-bind="template: {name: 'schema-filter-template__dictionary', data: facet}"
              >
                <ul className="schema-filter__list">
                  {}
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="lightblue"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        голубой
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="black"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        черный
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="gray"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        серый
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="lgray"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        светло-серый
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      className="schema-filter__checkbox-item"
                      data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                    >
                      <span className="i-checkbox">
                        <input
                          type="checkbox"
                          className="i-checkbox__real"
                          data-bind="value: item.id, checked: facet.values"
                          defaultValue="orange"
                        />
                        <span className="i-checkbox__faux" />
                      </span>
                      <span className="schema-filter__checkbox-text" data-bind="html: item.name">
                        оранжевый
                      </span>
                    </label>
                  </li>
                  {}
                </ul>
                {}
                <div
                  className="schema-filter-control schema-filter-control_more"
                  data-bind="click: facet.togglePopover.bind(facet)"
                >
                  <div className="schema-filter-control__item">
                    Все
                    <span data-bind="text: facet.dictionary.count">22</span>
                    <span data-bind="text: $root.format.pluralForm(facet.dictionary.count, ['\u0432\u0430\u0440\u0438\u0430\u043D\u0442', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430', '\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432'])">
                      варианта
                    </span>
                  </div>
                </div>
                <div className="schema-filter-popover__wrapper">
                  <div
                    className="schema-filter-popover"
                    data-bind="css: {'schema-filter-popover_visible': facet.isPopoverOpened},\n                      click: function (root, event) {event.originalEvent.stopPropagation(); return true;}"
                  >
                    <div className="schema-filter-popover__inner">
                      <div
                        className="schema-filter-popover__columns schema-filter-popover__columns_2"
                        data-bind="css: {'schema-filter-popover__columns_2': facet.dictionary.count <= 50,\n                                  'schema-filter-popover__columns_3': facet.dictionary.count > 50 && facet.dictionary.count <= 100,\n                                  'schema-filter-popover__columns_4': facet.dictionary.count > 100}"
                      >
                        {}
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="lightblue"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              голубой
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="black"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              черный
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="gray"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              серый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="lgray"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              светло-серый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="orange"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              оранжевый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="green"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              зеленый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="gold"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              золотистый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="white"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              белый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="red"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              красный
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="blue"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              синий
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="dblue"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              темно-синий
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="yell"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              желтый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="brown"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              коричневый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="silver"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              серебристый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="brgreen"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              светло-зеленый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="violet"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              фиолетовый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="pink"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              розовый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="beige"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              бежевый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="turquoise"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              бирюзовый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="titanic"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              титановый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="lilac"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              сиреневый
                            </span>
                          </label>
                        </div>
                        <div className="schema-filter-popover__column-item">
                          {}
                          {}
                          <label
                            className="schema-filter__checkbox-item"
                            data-bind="css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}"
                          >
                            <span className="i-checkbox">
                              <input
                                type="checkbox"
                                className="i-checkbox__real"
                                data-bind="value: item.id, checked: facet.values"
                                defaultValue="bord"
                              />
                              <span className="i-checkbox__faux" />
                            </span>
                            <span
                              className="schema-filter__checkbox-text"
                              data-bind="html: item.name"
                            >
                              бордовый
                            </span>
                          </label>
                        </div>
                        {}
                      </div>
                    </div>
                  </div>
                </div>
                {}
              </div>
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
            </div>
            {}
            {}
          </div>
          {}
          <div className="schema-filter-additional__wrapper">
            <div className="schema-filter-additional__trigger">
              <a href="ff">Дополнительные параметры</a>
            </div>
            <div
              className="schema-filter-additional"
              data-bind="if: $root.isAdditionalParametersVisible"
            />
          </div>
          {}
        </div>
        <div
          className="schema-filter-button schema-filter-button_fixed"
          id="schema-filter-button"
          style={{}}
          data-bind="css: {'schema-filter-button_fixed': $root.states.fixed,\n                  'schema-filter-button_hanged': $root.states.hanged},\n              visible: true"
        >
          <InfoLoader {...{ isLoadingGoods, goods }} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoadingGoods: state.goods.isLoading,
    goods: state.goods.data,
  }
}

export default connect(mapStateToProps)(CategoryFilter)
