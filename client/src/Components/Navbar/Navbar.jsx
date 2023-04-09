import {Link} from "react-router-dom";
import style from "./Navbar.module.css";

const NavBar = ()=>{
    return (
        <nav className={style.mainContainer}>
            <ul>
                <li><Link to="/countries" className={style.link}>Home</Link></li>
                <li><Link to="/activities" className={style.link}>Form</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;