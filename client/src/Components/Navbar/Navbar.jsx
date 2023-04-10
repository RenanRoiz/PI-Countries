import {Link} from "react-router-dom";
import style from "./Navbar.module.css";

const NavBar = ()=>{
    return (
        <nav className={style.mainContainer}>
            <ul>
                <li><Link to="/" className={style.link}>Landing</Link></li>
                <li><Link to="/home" className={style.link}>Home</Link></li>
                <li><Link to="/create" className={style.link}>Form</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;