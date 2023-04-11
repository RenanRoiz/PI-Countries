import React from 'react';
import { useDispatch } from 'react-redux';
import { sortCountriesByPopulation } from "./../../redux/actions";

const SortCountriesByPopulation = () => {
  const dispatch = useDispatch();

  const handleSort = (order) => {
    dispatch(sortCountriesByPopulation(order));
  };

  return (
    <div>
      <button onClick={() => handleSort('asc')}>Ascendente</button>
      <button onClick={() => handleSort('desc')}>Descendente</button>
    </div>
  );
};

export default SortCountriesByPopulation;