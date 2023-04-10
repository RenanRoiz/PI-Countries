import style from "./Detail.module.css"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountry } from "../../redux/actions";

const Detail = ()=>{
    const dispatch = useDispatch();
    const { ID } = useParams();

    useEffect(() => {
        dispatch(getCountry(ID));
      }, [ID, dispatch]);
    
      const country = useSelector((state) => state.detailCountry);
      const { imgFlag, name, id, continent, capital, subregion, area, activities } = country;
    
      const population = country.population
    return (
        <div className={style.contenedor}>
            <img className={style.img} src={imgFlag} alt="Imagen" />
            <h1>Nombre: {name}</h1>
            <h3>{id}</h3>
            <h4>Continente: {continent}</h4>
            <h4>Capital: {capital}</h4>
            <h4>Subregion: {subregion}</h4>
            <h4>Area: {area}</h4>
            <h4>Poblacion: {population}</h4>
            <h3>Actividades:</h3>
            {activities?.map((actividad, index) => (<h3 key={index}>{actividad.nombre}</h3>))}
        </div>
    )
}

export default Detail;