import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../components/CartItem";
import { RootState } from "../../store";
import {
  incrementItem,
  decrementItem,
  removeEntireItem,
  CartProduct,
} from "./cartSlice";

import "./cart.scss";

const calcTotalPrice = (items: CartProduct[]) =>
  items.reduce((acc, item) => acc + item.price * item.quantity, 0);

function Cart(): ReactElement {
  const items = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = calcTotalPrice(items);

  return (
    <div className="cart">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemoveItem={() => dispatch(removeEntireItem(item.id))}
          onIncrement={() => dispatch(incrementItem(item.id))}
          onDecrement={() => dispatch(decrementItem(item.id))}
        />
      ))}

      <footer className="cart__footer">Total: R$ {totalPrice}</footer>
    </div>
  );
}

export { Cart };
