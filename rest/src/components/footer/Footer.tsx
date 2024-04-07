import React from 'react';
import './Footer.css'; 
import { FaInstagram, FaTripadvisor, FaFacebook } from 'react-icons/fa'; // Importiere die Icons aus react-icons


//Weiterer Untersetien der Footer Komponente

function Links() {
    return (
      <ul className="Links">
        <li><a href="/impressum">Impressum</a></li>
        <li><a href="/datenschutz">Datenschutz</a></li>
        <li><a href="/cookies">Cookies</a></li>
      </ul>
    );
  }


//Insta Tripadvisor Facebook Icons  
  function Icons() {
    return (
      <ul className="Icons">
        <li><a href="https://www.instagram.com/leleberlin_/?hl=de"><FaInstagram /></a></li>
        <li><a href="https://www.tripadvisor.de/Restaurant_Review-g187323-d24123141-Reviews-Lele-Berlin.html"><FaTripadvisor /></a></li>
        <li><a href="https://www.facebook.com/leleberlin132"><FaFacebook /></a></li>
      </ul>
    );
  }


//Komonente zusammenfügen
function Footer() {
    return (
        <div className="Footer">
        <Links/>
        <Icons/>
        </div>
    );
}

export default Footer;
