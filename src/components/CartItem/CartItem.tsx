import React, { ReactElement } from "react";

import minusIcon from "../../assets/icons/minus-square.svg";
import plusIcon from "../../assets/icons/plus-square.svg";
import defaultImage from "../../assets/default-image.png";
import { CartProduct } from "../../containers/Cart/cartSlice";

import { formatPrice, capitalize } from "../../utils";

import "./cartItem.scss";

interface Props {
  onIncrement(): void;
  onDecrement(): void;
  onRemoveItem(): void;
  item: CartProduct;
}

function CartItem({
  onIncrement,
  onDecrement,
  onRemoveItem,
  item,
}: Props): ReactElement {
  return (
    <div className="cardItem">
      <div className="cardItem__imageContainer">
        <img src={item.sprites.front_default || defaultImage} alt={item.name} />
        <button onClick={onRemoveItem}>Remover Item</button>
      </div>
      <div className="cardItem__data">
        <div className="justifiedBetween">
          <span className="cardItem__title">{capitalize(item.name)}</span>
          <span className="cardItem__title">{formatPrice(item.price)}</span>
        </div>
        <div className="cartItem__buttons">
          <button onClick={onDecrement}>
            <img src={minusIcon} alt="Minus Icon" />
          </button>
          <span>{item.quantity}</span>
          <button onClick={onIncrement}>
            <img src={plusIcon} alt="Plus Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export { CartItem };
