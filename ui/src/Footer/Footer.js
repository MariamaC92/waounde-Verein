//Lukas

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footerLinks">
        <ul>
          <li><Link to="/links">Links</Link> </li>
          <li><Link to="/contact">Kontakt</Link> </li>
          <li><Link to="/impressum">Impressum</Link></li>
        </ul>
      
    </footer>
  );
};
