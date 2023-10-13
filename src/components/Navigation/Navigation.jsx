import { NavLink } from 'react-router-dom'
import style from './Navigation.module.scss'
import { FaUser, FaBars } from "react-icons/fa";

export const Navigation = () => {

    const activeStyle = ({ isActive }) => { return { color: isActive ? "#222" : "", textDecoration: isActive ? "underline" : "" } }
    
    function showUl() {
        alert("Hi")
    }

    return(
        <nav className={style.navigation}>
                <h1>INGN</h1>
            <ul>
                <NavLink to="/" style={activeStyle}>Alle</NavLink>
                <NavLink to="/kategori/indland" style={activeStyle}>Indland</NavLink>
                <NavLink to="/kategori/udland" style={activeStyle}>Udland</NavLink>
                <NavLink to="/kategori/teknologi" style={activeStyle}>Teknologi</NavLink>
                <NavLink to="/kategori/sport" style={activeStyle}>Sport</NavLink>
                <NavLink to="/kategori/politik" style={activeStyle}>Politik</NavLink>
                <NavLink to="/kategori/samfund" style={activeStyle}>Samfund</NavLink>
            </ul>
            <div>
                <FaUser/>
                <FaBars onClick={showUl}/>
            </div>
        </nav>
    )
}