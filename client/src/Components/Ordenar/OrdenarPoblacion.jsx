import React from 'react';
import { useDispatch } from 'react-redux';
import { sortCountriesByPopulation } from "./../../redux/actions";
import style from "./OrdenarPoblacion.module.css"

const SortCountriesByPopulation = () => {
  const dispatch = useDispatch();

  const handleSort = (order) => {
    dispatch(sortCountriesByPopulation(order));
  };

  return (
    <div className={style.ordenarPoblacion}>
      <h5>Ordenar por Población: </h5>
      <button onClick={() => handleSort('asc')}>Asc</button>
      <button onClick={() => handleSort('desc')}>Desc</button>
    </div>
  );
};

export default SortCountriesByPopulation;