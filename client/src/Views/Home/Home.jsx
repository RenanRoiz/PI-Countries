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
    
      const ResetButton = () => {
        const handleResetClick = () => {
          window.location.reload();
        };
      
        return <button onClick={handleResetClick}>Reset</button>;
      };


    return (
        <>
            <SortCountriesByPopulation />
            <SortCountriesByName />
            <FiltroContinente />
             <SearchBar />
             <Paged currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
             <ResetButton />
             <CardsContainer currentPage={currentPage} pageSize={pageSize}/>
        </>
           
    )
}

export default Home;