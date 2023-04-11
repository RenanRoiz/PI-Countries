import Card from "../Card/Card";
import Paged from "../Paginado/Paginado";
import style from "./CardsContainer.module.css"
import { useState } from "react";
import { useSelector } from "react-redux";

const CardsContainer = ({ currentPage, pageSize })=>{

    const countries = useSelector(state=>state.countries)
    console.log(countries)

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentCountries = countries.slice(startIndex, endIndex);  

    return(
        <>
        <div className={style.container}>
            { currentCountries.map((country,index)=>{ return <Card
                id={country.id}
                key={index}
                imgFlag = {country.imgFlag}
                name = {country.name}
                continent = {country.continent}
                population={country.population}
            />})}
        </div>
        </>
        
    )
}

export default CardsContainer;