import { useDispatch} from "react-redux";
import { useEffect } from "react";
import {filterByContinent,getActivities} from "../../redux/actions";
import style from "./FiltroContinente.module.css"

const FiltroContinente = ()=>{

  const dispatch=useDispatch();
  

  const handleContinentFilter = (continent) => {
    dispatch(filterByContinent(continent));
  };

  useEffect(()=>{
    dispatch(getActivities());
  },[dispatch])

  /*const activities = useSelector((state)=>state.activities);
  const handleFiltroChange =(actividad)=>{
    dispatch()
  }*/

  const ResetButton = () => {
    const handleResetClick = () => {
      window.location.reload();
    };
  
    return <button onClick={handleResetClick}>All</button>;
  };

  return(
    <div className={style.filtrocontinente}>
        <h5>Filtro Por región: </h5>
        <ResetButton />
        <button onClick={() => handleContinentFilter("North America")}>North America</button>
        <button onClick={() => handleContinentFilter("Europe")}>Europe</button>
        <button onClick={() => handleContinentFilter("Asia")}>Asia</button>
        <button onClick={() => handleContinentFilter("Africa")}>Africa</button>
        <button onClick={() => handleContinentFilter("South America")}>South America</button>
        <button onClick={() => handleContinentFilter("Oceania")}>Oceania</button>
        <button onClick={() => handleContinentFilter("Antarctica")}>Antarctica</button>
      </div>
  )
  
}

/*
<select name="activities" onChange={handleFiltroChange}>
          <option key="" value=""> Seleccionar paises</option>
          {activities.map((elemento) => {return <option>{elemento.name}</option>})}
        </select>
*/

export default FiltroContinente;