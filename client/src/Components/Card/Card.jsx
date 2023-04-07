import style from "./Card.module.css"

const Card = (props)=>{
    return (
        <div className={style.Card}>
            <p>Name: {props.name}</p>
            <p>Bandera: {props.imgFlag}</p>
            <p>Continente: {props.continent}</p>
        </div>
    )
}

export default Card;