import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { DRAWERS_NAMES } from "../../constants";
import { openDrawer } from "../App/drawerSlice";

import cartIcon from "../../assets/icons/shopping-cart-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import logo from "../../assets/logo.png";
import { RootState } from "../../store";

import "./header.scss";
import { CartProduct } from "../Cart/cartSlice";

const getItemsQuantity = (items: CartProduct[]) =>
  items.reduce((acc, item) => item.quantity + acc, 0);

function Header(): ReactElement {
  const cartProducts = useSelector((state: RootState) => state.cart);
  const itemQuantity = getItemsQuantity(cartProducts);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img src={logo} alt="logo pokestore" className="header__title" />
        </Link>
        <div className="header__icons">
          <button
            onClick={() => dispatch(openDrawer(DRAWERS_NAMES.CART))}
            className="header__cartIcon"
          >
            <img src={cartIcon} alt="cart icon" />
            {itemQuantity > 0 && (
              <span className="header__cartItemsQuantity">{itemQuantity}</span>
            )}
          </button>
          <button onClick={() => dispatch(openDrawer(DRAWERS_NAMES.SEARCH))}>
            <img src={searchIcon} alt="search icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export { Header };
