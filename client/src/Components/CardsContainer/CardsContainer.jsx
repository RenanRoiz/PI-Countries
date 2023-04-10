import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

const CardsContainer = ()=>{

    const countries = useSelector(state=>state.countries)
    console.log(countries)

    return(
        <div className={style.container}>
            { countries.map((country,index)=>{ return <Card
                id={country} 
                key={index}
                imgFlag = {country.imgFlag}
                name = {country.name}
                continent = {country.continent}
                population={country.population}
            />})}
        </div>
    )
}

export default CardsContainer;