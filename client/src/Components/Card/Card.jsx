import style from "./Card.module.css"

const Card = (props)=>{
    return (
        <div className={style.Card}>
            <h2>Name: {props.name}</h2>
            <p>Bandera: {props.imgFlag}</p>
            <h3>Continente: {props.continent}</h3>
        </div>
    )
}

export default Card;