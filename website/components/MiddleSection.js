import React from "react";
import CatalogNavigation from "./CatalogNavigation";
import Category from "./Category";

class MiddleSection extends React.Component {
  render() {
    return (
      <div className="g-middle">
        <div className="g-middle-i">
          <link
            rel="stylesheet"
            href="./\u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 Onliner.by_files/catalog-navigation.css"
          />
          <CatalogNavigation />
          {}
          <Category />
        </div>
      </div>
    );
  }
}

export default MiddleSection;
