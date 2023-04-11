import style from "./Detail.module.css"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountry } from "../../redux/actions";

const Detail = ()=>{
    const detail = useSelector((state)=>state.detail)
    const dispatch = useDispatch();

    const { ID } = useParams();

    

    useEffect(() => {
        dispatch(getCountry(ID));
      }, [ID, dispatch]);

      console.log(detail, "Country DETAIL")
    
      /*const country = useSelector((state) => state.detailCountry);
      const { imgFlag, name, id, continent, capital, subregion, area, activities } = country;
    
      const population = country.population*/
    return (
        <div className={style.contenedor}>
            <img className={style.img} src={detail.imgFlag} alt="Imagen" />
            <h1>Nombre: {detail.name}</h1>
            <h3>{detail.id}</h3>
            <h4>Continente: {detail.continent}</h4>
            <h4>Capital: {detail.capital}</h4>
            <h4>Subregion: {detail.subregion}</h4>
            <h4>Area: {detail.area}</h4>
            <h4>Poblacion: {detail.population}</h4>
            <h3>Actividades:</h3>
            {detail.activities?.map((actividad, index) => (<h3 key={index}>{actividad.nombre}</h3>))}
        </div>
    )
}

export default Detail;