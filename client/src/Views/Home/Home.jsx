import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import SearchBar  from "../../Components/SearchBar/SearchBar";
import FiltroContinente from "../../Components/Filtros/FiltroContinente";
import SortCountriesByName from "../../Components/Ordenar/OrdenarPais";
import SortCountriesByPopulation from "../../Components/Ordenar/OrdenarPoblacion"

const Home = ()=>{

    const dispatch=useDispatch();


    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])


    return (
        <>
            <SortCountriesByPopulation />
            <SortCountriesByName />
            <FiltroContinente />
             <SearchBar />
             <CardsContainer />
        </>
           
    )
}

export default Home;