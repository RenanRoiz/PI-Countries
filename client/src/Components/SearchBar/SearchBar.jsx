import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountries } from "../../redux/actions"
import style from "./SearchBar.module.css"

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchCountries(query));
  };

  return (
    <form onSubmit={handleSubmit} className={style.searchBar}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
