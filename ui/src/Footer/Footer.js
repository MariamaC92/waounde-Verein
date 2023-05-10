import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { ReactComponent as OrnamentTwo } from "../_App/Images/OrnamentTwo.svg";
import { CookiesIcon, ImpressumIcon, KontaktIcon, LinksIcon } from "./FooterIcons.js";

export default function Footer() {
  return (
    <>
    <OrnamentTwo className="ornamentFooter"/>
      <footer className="footerBar">
    <nav className="navBar">
          <ul className="menu">
          <li>
            <NavLink to="/links" className="navLink">
              <div className="navText">Links</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" className="navLink">
              <div className="navText">Kontakt</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/datenschutz" className="navLink">
              <div className="navText">Cookies/Datenschutz</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/impressum" className="navLink">
              <div className="navText">Impressum</div>
            </NavLink>
          </li>
          </ul>
        </nav>
    </footer>
    </>
  );
};
