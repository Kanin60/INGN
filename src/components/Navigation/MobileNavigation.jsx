import style from './Navigation.module.scss'
import { NavLinks } from "./NavLinks";
import { FaUser, FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { Login } from "../../pages/Login/Login";
import { Link } from "react-router-dom";

export const MobileNavigation = () => {

    const [open, setOpen] = useState(false)


    return(
        <>
            <nav className={style.mobileNavigation}>
                <div>
                    <h1 className={style.mobileH1}>INGN</h1>
                    <figure>
                        <Link to="/Login"><FaUser/></Link>
                        <FaBars onClick={() => setOpen(!open) }/>
                    </figure>
                </div>
                { open && <><NavLinks /></>}
            </nav>
        </>
    )
}
