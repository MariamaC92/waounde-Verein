import "./MainNavigation.css";
import { NavLink } from "react-router-dom"; 

export default function MainNavigation() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/ueberuns">Über uns</NavLink></li>
        <li><NavLink to="/aktuelles">Aktuelles</NavLink></li>
        <li><NavLink to="/projekte">Projekte</NavLink></li>
        <li><NavLink to="/spenden">Spenden</NavLink></li>
      </ul>
    </nav>
  );}
