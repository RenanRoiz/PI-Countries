import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import SearchBar  from "../../Components/SearchBar/SearchBar";
import OrdenarActividad from "../../Components/Ordenar/OrdenarActividad";
import OrdenarPais from "../../Components/Ordenar/OrdenarPais";
import { filterByActivity, filterByContinent } from "../../redux/actions";

const Home = ()=>{

    const countries = useSelector((state) => state.countries);
    const dispatch=useDispatch();

    const handleContinentFilter = (continent) => {
        dispatch(filterByContinent(continent));
      };
    
      /*const handleActivityFilter = (activity) => {
        dispatch(filterByActivity(activity));
      };*/

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])


    return (
        <>
            <div>
        <button onClick={() => handleContinentFilter("All")}>All</button>
        <button onClick={() => handleContinentFilter("North America")}>North America</button>
        <button onClick={() => handleContinentFilter("Europe")}>Europe</button>
        <button onClick={() => handleContinentFilter("Asia")}>Asia</button>
        <button onClick={() => handleContinentFilter("Africa")}>Africa</button>
        <button onClick={() => handleContinentFilter("South America")}>South America</button>
        <button onClick={() => handleContinentFilter("Oceania")}>Oceania</button>
        <button onClick={() => handleContinentFilter("Antarctica")}>Antarctica</button>
      </div>
            <OrdenarActividad />
            <OrdenarPais />
             <SearchBar />
             <CardsContainer />
        </>
           
    )
}

export default Home;