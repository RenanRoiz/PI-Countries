import style from "./Card.module.css"
import { Link } from "react-router-dom";



const Card = (props)=>{
    return (
        
        <div className={style.Card}>
            <img src={props.imgFlag} alt="Bandera"/>
            <h2> <Link to={`/detail/${props.id}`}>
                {props.name}
            </Link></h2>
            <h3>Continente: {props.continent}</h3>
            <h4>Población: {props.population}</h4>
        </div>
        
    )
}

export default Card;