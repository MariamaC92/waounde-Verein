import "./MainNavigation.css";
import { NavLink } from "react-router-dom";
import { AktuellesIcon, UberUnsIcon, ProjekteIcon, SpendenIcon } from "./Icons.js";



export default function MainNavigation() {

  return (
    <div>
      <nav className="navbar">
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <NavLink to="/ueberuns" className="navLink"> 
            <UberUnsIcon/>Über uns
            </NavLink>
          </li>
          <li>
          
            <NavLink
              to="/aktuelles"
              className="navLink">
              <AktuellesIcon/> Aktuelles
            </NavLink>
          </li>
          <li>
            <NavLink to="/projekte" className="navLink">
            <ProjekteIcon/> Projekte
            </NavLink>
          </li>
          <li>
            <NavLink to="/spenden" className="navLink">
            <SpendenIcon/>Spenden
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
