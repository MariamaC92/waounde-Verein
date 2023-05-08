import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { ReactComponent as OrnamentTwo } from "../_App/Images/OrnamentTwo.svg";

export default function Footer() {
  return (
    <>
    <OrnamentTwo className="ornamentFooter"/>
    <footer className="footerBar">
        <ul>
          <li><Link to="/links" className="footerLink">Links</Link> </li>
          <li><Link to="/kontakt" className="footerLink">Kontakt</Link> </li>
          <li><Link to="/datenschutz" className="footerLink">Cookies/Datenschutz</Link> </li>
          <li><Link to="/impressum" className="footerLink">Impressum</Link></li>
        </ul>
    </footer>
    </>
  );
};
