import {Link} from "react-router-dom";
import style from "./Landing.module.css"

const Landing = ()=>{
    return (
        <div className={style.contenedor}>
            <button className={style.boton}><Link to={"/countries"} className={style.link}>Ingresar</Link></button>
        </div>
    )
}

export default Landing;