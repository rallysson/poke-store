import React, { ReactElement, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api";
import { Pokemon, Abilities, Types } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { addRandomPrice } from "../Home/productsSlice";
import { formatPrice, capitalize } from "../../utils";
import { addItem, incrementItem } from "../Cart/cartSlice";

import { RootState } from "../../store";
import defautImage from "../../assets/default-image.png";

import "./product.scss";

const getAbilities = (abilities: Abilities[]) =>
  abilities.map((ability) => ability.ability.name).join(",");

const getTypes = (abilities: Types[]) =>
  abilities.map((type) => type.type.name).join(",");

function Product(): ReactElement {
  const { idProduct } = useParams();
  const [product, setProduct] = useState<Pokemon>();
  const [, setLoading] = useState(true);
  const cartProducts = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const {
    data: { results },
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    async function getProductByid() {
      try {
        const pokemon = await getProduct(idProduct);
        const pokeData = results.find(
          (element) => Number(element.id) === pokemon.id
        );
        setProduct(
          pokeData
            ? { ...pokemon, price: pokeData.price }
            : addRandomPrice(pokemon)
        );
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    getProductByid();
  }, [idProduct, results]);

  function handleAddItem(id: number) {
    const cartProduct = cartProducts.find(
      (element) => element.id === Number(idProduct)
    );

    if (cartProduct) {
      dispatch(incrementItem(Number(idProduct)));
    } else {
      dispatch(addItem(product as Pokemon));
    }
  }

  return (
    <div className="product">
      {product && (
        <>
          <div className="product__imageContainer">
            <img
              className="product__image"
              src={product.sprites.front_default || defautImage}
              alt={product.name}
            />
          </div>
          <div className="product__description">
            <span className="product__name">{capitalize(product.name)}</span>

            <div>
              <span>Habilidades: {getAbilities(product.abilities)}</span>
            </div>

            <div>
              <span>Tipos: {getTypes(product.types)}</span>
            </div>

            <div>
              <span>{formatPrice(product.price)}</span>
            </div>

            <button
              onClick={() => handleAddItem(product.id)}
              className="product__addCart product__sizeButton"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export { Product };
