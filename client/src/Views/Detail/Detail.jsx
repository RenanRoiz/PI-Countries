import style from "./Detail.module.css"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountry, getCountries } from "../../redux/actions";

const Detail = ()=>{
    const detail = useSelector((state)=>state.detail)
    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries);
    useEffect(()=>{
            dispatch(getCountries());
        },[dispatch])

        console.log(countries)
    
    let { ID } = useParams();

    function filterById(id) {
        const filteredData = countries.find(item => item.id === id);
        return filteredData;
      }

    const filteredData = filterById(ID);
    console.log(filteredData)
    

    useEffect(() => {
        dispatch(getCountry(ID));
      }, [ID, dispatch]);

      console.log(detail, "Country DETAIL")
    
      /*const country = useSelector((state) => state.detailCountry);
      const { imgFlag, name, id, continent, capital, subregion, area, activities } = country;
    
      const population = country.population*/
    return (
        <div className={style.contenedor}>
            <img className={style.img} src={filteredData.imgFlag} alt="Imagen" />
            <h1>Nombre: {filteredData.name}</h1>
            <h3>{filteredData.id}</h3>
            <h4>Continente: {filteredData.continent}</h4>
            <h4>Capital: {filteredData.capital}</h4>
            <h4>Subregion: {filteredData.subregion}</h4>
            <h4>Area: {filteredData.area}</h4>
            <h4>Poblacion: {filteredData.population}</h4>
            <h3>Actividades:</h3>
            {filteredData.activities?.map((actividad, index) => (<h3 key={index}>{actividad.nombre}</h3>))}
        </div>
    )
}

export default Detail;