import { useDispatch } from 'react-redux';
import { filterContinent } from "./../../redux/actions"

const FiltroContinente = () => {
  const dispatch = useDispatch();

  const handleFiltroContinente = (event) => {
    dispatch(filterContinent(event.target.value));
  }

  return (
    <select onChange={handleFiltroContinente}>
        <option disabled selected>
          Seleccionar...
        </option>
        <option value="All">All</option>
        <option value="North America">North America</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
        <option value="Antarctica">Antarctica</option>
    </select>
  )

}

export default FiltroContinente;