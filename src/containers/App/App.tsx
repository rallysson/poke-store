import React, { ReactElement, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../Home/productsSlice";
import { Home } from "../Home";
import { Product } from "../Product";
import { Header } from "../Header";
import { Cart } from "../Cart";
import { Search } from "../Search";

import { Drawer } from "../../components/Drawer";
import { closeDrawer } from "./drawerSlice";
import { RootState } from "../../store";
import { DRAWERS_NAMES } from "../../constants";
import "./app.scss";

function App(): ReactElement {
  const dispatch = useDispatch();
  const visibleDrawer = useSelector((state: RootState) => state.drawer);
  const productsSlice = useSelector((state: RootState) => state.products);
  const {
    data: { results: pokes },
  } = productsSlice;

  useEffect(() => {
    if (!pokes.length) {
      dispatch(fetchProducts(1));
    }
  }, [dispatch]);

  return (
    <div className={`app ${visibleDrawer ? "app--drawer--visible" : ""}`}>
      <Header />
      <main className="app__main">
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={Product} path="/products/:idProduct" />
        </Switch>
      </main>
      <Drawer
        visible={visibleDrawer === DRAWERS_NAMES.CART}
        onClose={() => dispatch(closeDrawer())}
        title="Carrinho"
      >
        <Cart />
      </Drawer>
      <Drawer
        visible={visibleDrawer === DRAWERS_NAMES.SEARCH}
        onClose={() => dispatch(closeDrawer())}
        title="Busca"
      >
        <Search />
      </Drawer>
    </div>
  );
}

export { App };
