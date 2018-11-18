import React from 'react'
import CatalogNavigationItem from '../CatalogNavigationItem'

class CatalogNavigation extends React.Component {
  state = [
    { id: '1', name: 'Электроника' },
    { id: '2', name: 'Компьютеры и сети' },
    { id: '3', name: 'Бытовая техника' },
    { id: '4', name: 'Стройка и ремонт' },
    { id: '5', name: 'Дом и сад' },
    { id: '6', name: 'Авто и мото' },
    { id: '7', name: 'Красота и спорт' },
    { id: '8', name: 'Детям и мамам' },
    { id: '9', name: 'Работа и офис' },
  ]
  render() {
    const items = this.state
    console.log('items', items)
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
            {items.map(({ id, name }) => (
              <CatalogNavigationItem key={id} name={name} />
            ))}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default CatalogNavigation
