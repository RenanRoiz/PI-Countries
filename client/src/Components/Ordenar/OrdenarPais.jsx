import React from 'react';
import { useDispatch} from 'react-redux';
import { sortCountriesByName } from "../../redux/actions";

const SortCountriesByName = () => {
  const dispatch = useDispatch();

  const handleSort = (order) => {
    dispatch(sortCountriesByName(order));
  };

  return (
    <div>
      <button onClick={() => handleSort('asc')}>A-Z</button>
      <button onClick={() => handleSort('desc')}>Z-A</button>
    </div>
  );
};

export default SortCountriesByName;
