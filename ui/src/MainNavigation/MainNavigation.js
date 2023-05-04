import "./MainNavigation.css";
import { NavLink } from "react-router-dom"; 

export default function MainNavigation() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/ueberuns" className="navLink">Über uns</NavLink></li>
        <li><NavLink to="/aktuelles" className="navLink">Aktuelles</NavLink></li>
        <li><NavLink to="/projekte" className="navLink">Projekte</NavLink></li>
        <li><NavLink to="/spenden" className="navLink">Spenden</NavLink></li>
      </ul>
    </nav>
  );}
