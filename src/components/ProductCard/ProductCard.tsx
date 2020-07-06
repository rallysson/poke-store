import React, { ReactElement } from "react";
import { Product } from "../../containers/Home/productsSlice";
import { Link } from "react-router-dom";
import { formatPrice, capitalize } from "../../utils";

import defautImage from "../../assets/default-image.png";
import "./productCard.scss";

interface Props {
  product: Product;
}

const formatURLImage = (idPoke: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPoke}.png`;

function ProductCard({ product }: Props): ReactElement {
  return (
    <section className="card">
      <Link to={`products/${product.id}`}>
        <div className="card__imageContainer">
          <img
            className="card__image"
            src={formatURLImage(product.id) || defautImage}
            alt={product.name}
          />
        </div>

        <div className="card__descriptionContainer">
          <b>{capitalize(product.name)}</b>
          <span>{formatPrice(product.price)}</span>
        </div>
      </Link>
    </section>
  );
}

export { ProductCard };
