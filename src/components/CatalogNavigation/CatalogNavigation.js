import React from 'react'
import CatalogNavigationItem from '../CatalogNavigationItem'

class CatalogNavigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <link rel="stylesheet" href="./Товары в каталоге Onliner.by_files/catalog-navigation.css" />

        <div className="catalog-navigation">
          <div
            className="catalog-navigation-classifier-buffer"
            style={{
              height: '40px',
            }}
          />
          <ul className="catalog-navigation-classifier catalog-navigation-classifier_simple">
            <li
              className="catalog-navigation-classifier__close"
              style={{
                display: 'none',
              }}
            />
            <CatalogNavigationItem />
            <CatalogNavigationItem />
            <li className="catalog-navigation-classifier__item " data-id={3}>
              <span className="catalog-navigation-classifier__item-icon catalog-navigation-classifier__item-icon_id_3" />
              <span className="catalog-navigation-classifier__item-title">
                <span className="catalog-navigation-classifier__item-title-wrapper">
                  Бытовая техника
                </span>
              </span>
            </li>
            <li className="catalog-navigation-classifier__item " data-id={4}>
              <span className="catalog-navigation-classifier__item-icon catalog-navigation-classifier__item-icon_id_4" />
              <span className="catalog-navigation-classifier__item-title">
                <span className="catalog-navigation-classifier__item-title-wrapper">
                  Стройка и ремонт
                </span>
              </span>
            </li>
            <li className="catalog-navigation-classifier__item " data-id={5}>
              <span className="catalog-navigation-classifier__item-icon catalog-navigation-classifier__item-icon_id_5" />
              <span className="catalog-navigation-classifier__item-title">
                <span className="catalog-navigation-classifier__item-title-wrapper">Дом и сад</span>
              </span>
            </li>
            <li className="catalog-navigation-classifier__item " data-id={6}>
              <span className="catalog-navigation-classifier__item-icon catalog-navigation-classifier__item-icon_id_6" />
              <span className="catalog-navigation-classifier__item-title">
                <span className="catalog-navigation-classifier__item-title-wrapper">
                  Авто и мото
                </span>
              </span>
            </li>
            <li className="catalog-navigation-classifier__item " data-id={7}>
              <span className="catalog-navigation-classifier__item-icon catalog-navigation-classifier__item-icon_id_7" />
              <span className="catalog-navigation-classifier__item-title">
                <span className="catalog-navigation-classifier__item-title-wrapper">
                  Красота и спорт
                </span>
              </span>
            </li>
            <li className="catalog-navigation-classifier__item " data-id={8}>
              <span className="catalog-navigation-classifier__item-icon catalog-navigation-classifier__item-icon_id_8" />
              <span className="catalog-navigation-classifier__item-title">
                <span className="catalog-navigation-classifier__item-title-wrapper">
                  Детям и мамам
                </span>
              </span>
            </li>
            <li className="catalog-navigation-classifier__item " data-id={9}>
              <span className="catalog-navigation-classifier__item-icon catalog-navigation-classifier__item-icon_id_9" />
              <span className="catalog-navigation-classifier__item-title">
                <span className="catalog-navigation-classifier__item-title-wrapper">
                  Работа и офис
                </span>
              </span>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default CatalogNavigation
