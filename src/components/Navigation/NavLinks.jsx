import { NavLink } from 'react-router-dom'
import style from './Navigation.module.scss'

export const NavLinks = () => {

    const activeStyle = ({ isActive }) => { return { color: isActive ? "#222" : "", textDecoration: isActive ? "underline" : "" } }
    
    return(
        <ul>
            <NavLink to="/" style={activeStyle}>Alle</NavLink>
            <NavLink to="/kategori/indland" style={activeStyle}>Indland</NavLink>
            <NavLink to="/kategori/udland" style={activeStyle}>Udland</NavLink>
            <NavLink to="/kategori/teknologi" style={activeStyle}>Teknologi</NavLink>
            <NavLink to="/kategori/sport" style={activeStyle}>Sport</NavLink>
            <NavLink to="/kategori/politik" style={activeStyle}>Politik</NavLink>
            <NavLink to="/kategori/samfund" style={activeStyle}>Samfund</NavLink>
        </ul>
    )
}