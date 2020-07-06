import React, { ReactElement, useState } from "react";
import { useSelector } from "react-redux";

import { CardSearch } from "../../components/CardSearch";
import { RootState } from "../../store";

import "./search.scss";

function Search(): ReactElement {
  // const [search, setSearch] = useState("");
  // const items = useSelector((state: RootState) => state.products.data);
  // const regexSearch = new RegExp(search, "ig");

  // const filterdItems = items.filter((item) => regexSearch.test(item.name));
  return (
    <div className="search">
      <input
        placeholder="Digite para pesquisar"
        className="search__input"
        type="text"
      />
      {/* <div className="search__inputContainer">
      </div>
      {filterdItems.map((item) => (
        <CardSearch key={item.code_color} item={item} />
      ))} */}
    </div>
  );
}

export { Search };
