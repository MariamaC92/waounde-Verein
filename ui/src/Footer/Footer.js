import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { ReactComponent as OrnamentTwo } from "../_App/Images/OrnamentTwo.svg";
import { CookiesIcon, ImpressumIcon, KontaktIcon, LinksIcon } from Footer;

export default function Footer() {
  return (
    <>
    <OrnamentTwo className="ornamentFooter"/>
    <footer className="footerBar">
        <ul>
          <li>
            <Link to="/links" className="footerLink">
            <LinksIcon />
              Links</Link></li>
          <li>
            <Link to="/kontakt" className="footerLink">
            <KontaktIcon />
              Kontakt</Link></li>
          <li>
            <Link to="/datenschutz" className="footerLink">
            <CookiesIcon />
              Cookies/Datenschutz</Link></li>
          <li><Link to="/impressum" className="footerLink">
          <ImpressumIcon />
            Impressum</Link></li>
        </ul>
    </footer>
    </>
  );
};
