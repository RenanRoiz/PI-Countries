import style from "./Detail.module.css"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountries, getActivities } from "../../redux/actions";

const Detail = ()=>{
    const dispatch = useDispatch();

    const activities = useSelector((state)=>state.activities);
    const countries = useSelector((state) => state.countries);
    useEffect(()=>{
            dispatch(getCountries());
        },[dispatch])


    useEffect(()=>{
        dispatch(getActivities());
    },[dispatch])
    
    let { ID } = useParams();

    function filterById(id) {
        const filteredData = countries.find(item => item.id === id);
        return filteredData;
      }
    
      function filtradoActividad(id){
        const actividades = activities.find(actividad=>actividad.id === id);
        return actividades;
      }

    const filteredData = filterById(ID);
    const actividadFiltrada=filtradoActividad(ID);

    return (
        <div className={style.detail}>
        <div className={style.contenedor}>
            <img className={style.img} src={filteredData.imgFlag} alt="Imagen" />
            <h1>Nombre: {filteredData.name}</h1>
            <h3>{filteredData.id}</h3>
            <h4>Continente: {filteredData.continent}</h4>
            <h4>Capital: {filteredData.capital}</h4>
            <h4>Subregion: {filteredData.subregion}</h4>
            <h4>Area: {filteredData.area}</h4>
            <h4>Poblacion: {filteredData.population}</h4>
            <h3>Actividades: {actividadFiltrada}</h3>
        </div>
        </div>
    )
}

export default Detail;