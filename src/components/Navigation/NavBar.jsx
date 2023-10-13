import style from './Navigation.module.scss'
import { NavLinks } from "./NavLinks";
import { FaUser } from "react-icons/fa";
import { Login } from "../../pages/Login/Login";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <>
         <nav className={style.navigation}>
                <h1>INGN</h1>
            <NavLinks />
            <div>
                <Link to="/Login"><FaUser/></Link>
            </div>  
        </nav>
        </>
    )
}