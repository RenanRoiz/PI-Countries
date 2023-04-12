import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import { setCurrentPage } from "../../redux/actions";
import SearchBar  from "../../Components/SearchBar/SearchBar";
import FiltroContinente from "../../Components/Filtros/FiltroContinente";
import SortCountriesByName from "../../Components/Ordenar/OrdenarPais";
import SortCountriesByPopulation from "../../Components/Ordenar/OrdenarPoblacion"
import Paged from "../../Components/Paginado/Paginado";
import style from "./Home.module.css";


const Home = ()=>{

    const dispatch=useDispatch();
    const countries = useSelector((state) => state.countries);
    const currentPage = useSelector((state) => state.currentPage);
    const pageSize = 10;
    const totalPages = Math.ceil(countries.length / pageSize);

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page));
      };
    



    return (
        <div className={style.container}>
            <div className={style.filterContainer}>
              <SortCountriesByPopulation />
              <SortCountriesByName />
            </div>
            <FiltroContinente />
             <div className={style.container_2}>
             <SearchBar />
            </div>
            
             <CardsContainer currentPage={currentPage} pageSize={pageSize}/>
             <Paged currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
           
    )
}

export default Home;