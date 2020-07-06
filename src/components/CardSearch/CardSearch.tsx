import React, { ReactElement } from "react";

import defaultImage from "../../assets/default-image.png";
import "./cardSearch.scss";

interface Props {
  item: any;
}

function CardSearch({ item }: Props): ReactElement {
  return (
    <div className="cardSearch">
      <div className="cardSearch__imageContainer">
        <img src={item.image || defaultImage} alt={item.name} />
      </div>
      <div className="cardSearch__data">
        <div className="justifiedBetween">
          <span className="cardSearch__title">{item.name}</span>
          <span className="cardSearch__title">
            {item.actual_price ? item.actual_price : item.regular_price}
          </span>
        </div>
        <div className="justifiedBetween">
          <span className="cardSearch__description">{item.installments}</span>
        </div>
      </div>
    </div>
  );
}

export { CardSearch };
