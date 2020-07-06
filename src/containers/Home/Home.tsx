import React, { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "react-paginate";

import { ProductCard } from "../../components/ProductCard";
import { Loader } from "../../components/Loader";
import { RootState } from "../../store";

import "./home.scss";

const PAGE_SIZE = 30;

function usePagination() {
  const [pagination, setPagination] = useState(1);

  return { pagination, setPagination };
}

function Home(): ReactElement {
  const productsSlice = useSelector((state: RootState) => state.products);
  const { pagination, setPagination } = usePagination();
  const {
    data: { results: pokes },
    loading,
  } = productsSlice;

  const itensPagination = pokes.slice(
    (pagination - 1) * PAGE_SIZE,
    pagination * PAGE_SIZE
  );
  return (
    <div className="home">
      <span className="home__itemsQuantidade">{pokes.length} itens</span>
      {loading ? (
        <Loader className="home__loader" />
      ) : (
        <section className="home__productsContainer">
          {itensPagination.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </section>
      )}
      <Pagination
        pageCount={Math.ceil(pokes.length / 30)}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        onPageChange={({ selected }) => setPagination(selected + 1)}
        containerClassName={"pagination"}
        activeClassName={"active"}
        breakClassName={"break-me"}
      />
    </div>
  );
}

export { Home };
