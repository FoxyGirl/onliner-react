import React from "react";

class CatalogNavigationItem extends React.Component {
  render() {
    return (
      <li className="catalog-navigation-classifier__item " data-id={2}>
        <span className="catalog-navigation-classifier__item-icon catalog-navigation-classifier__item-icon_id_2" />
        <span className="catalog-navigation-classifier__item-title">
          <span className="catalog-navigation-classifier__item-title-wrapper">
            Компьютеры и сети
          </span>
        </span>
      </li>
    );
  }
}

export default CatalogNavigationItem;
