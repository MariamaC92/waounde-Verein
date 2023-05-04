import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footerBar">
        <ul>
          <li><Link to="/links" className="footerLink">Links</Link> </li>
          <li><Link to="/kontakt" className="footerLink">Kontakt</Link> </li>
          <li><Link to="/datenschutz" className="footerLink">Cookies/Datenschutz</Link> </li>
          <li><Link to="/impressum" className="footerLink">Impressum</Link></li>
        </ul>
    </footer>
  );
};
