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
            <div className="navIcon" id="uberUnsIcon">
            <UberUnsIcon/> 
            </div>
            <div className="navPoints">Über uns</div>
            
            
            </NavLink>
          </li>
          <li>
          
            <NavLink
              to="/aktuelles"
              className="navLink">
                <div className="navIcon">
              <AktuellesIcon/>
              </div>
              <div className="navPoints">Aktuelles</div> 
            </NavLink>
          </li>
          <li>
            <NavLink to="/projekte" className="navLink">
            <div className="navIcon">
            <ProjekteIcon/>
            </div> 
            <div className="navPoints">Projekte</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/spenden" className="navLink">
            <div className="navIcon" id="spendenIcon">
            <SpendenIcon/>
            </div>
            <div className="navPoints">Spenden</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
