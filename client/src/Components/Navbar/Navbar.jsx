import {Link} from "react-router-dom";
import style from "./Navbar.module.css";

const NavBar = ()=>{
    return (
        <div className={style.mainContainer}>
            <Link to="/countries">Home</Link>
            <Link to="/activities">Form</Link>
        </div>
    )
}

export default NavBar;