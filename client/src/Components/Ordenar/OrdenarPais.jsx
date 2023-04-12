import React from 'react';
import { useDispatch} from 'react-redux';
import { sortCountriesByName } from "../../redux/actions";
import style from "./OrdenarPais.module.css"

const SortCountriesByName = () => {
  const dispatch = useDispatch();

  const handleSort = (order) => {
    dispatch(sortCountriesByName(order));
  };

  return (
    <div className={style.ordenarAlfabeticamente}>
      <h5>Ordenar por País: </h5>
      <button onClick={() => handleSort('asc')}>A-Z</button>
      <button onClick={() => handleSort('desc')}>Z-A</button>
    </div>
  );
};

export default SortCountriesByName;
