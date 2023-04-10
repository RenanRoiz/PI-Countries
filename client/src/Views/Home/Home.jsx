import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import SearchBar  from "../../Components/SearchBar/SearchBar";
import FiltroContinente from "../../Components/Filtros/FiltroContinente"
import FiltroActividad from "../../Components/Filtros/FiltroActividad";
import OrdenarActividad from "../../Components/Ordenar/OrdenarActividad";
import OrdenarPais from "../../Components/Ordenar/OrdenarPais";


const Home = ()=>{

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])


    return (
        <>
            <FiltroActividad />
            <FiltroContinente />
            <OrdenarActividad />
            <OrdenarPais />
             <SearchBar />
             <CardsContainer />
        </>
           
    )
}

export default Home;