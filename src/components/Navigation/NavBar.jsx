import style from './Navigation.module.scss'
import { NavLinks } from "./NavLinks";
import { FaUser } from "react-icons/fa";

export const NavBar = () => {
    return(
        <>
         <nav className={style.navigation}>
                <h1>INGN</h1>
            <NavLinks />
            <div>
                <FaUser/>
            </div>  
        </nav>
        </>
    )
}