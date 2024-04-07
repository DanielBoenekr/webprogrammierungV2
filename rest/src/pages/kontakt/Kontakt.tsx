

import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Kontakt.css";
import openingHours from "./openingHours.json";

//Standart html Code für die Kontaktseite
function Informations(){
  return(
    <div className="Informations">
      <h3>Kontakt</h3>
      <p>Telefon: 030 37479958</p>
      <p>Adresse: Torstraße 132 / 10119 Berlin</p>
    </div>
  );
}


//Öffnungszeiten aus Json Datei werden geladen, weil sie sich ändern können und man änderungen so leichter vornehmen kann
//JSON OBjekt hat die Struktur: day, hours (siehe openingHours.json)
function Hours() {
  return (
    <div className="Hours">
      <h3 id="HoursHeadline">Öffnungszeiten</h3>
      {openingHours.map((openingHour, index) => (
        <p key={index}>
          {openingHour.day}: {openingHour.hours}
        </p>
      ))}
    </div>
  );
}


//Anfahrt mit Google Maps integriert
function Directions() {
  return (
    <div className="Directions">
      <h3>Anfahrt</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.2217882680693!2d13.397475476526754!3d52.52942127206365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8512aa151ae87%3A0x529a0f543ae5f5d5!2zTMOqTMOq!5e0!3m2!1sde!2sde!4v1708952290159!5m2!1sde!2sde"
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: "0" }}
      ></iframe>
    </div>
  );
}



function Kontakt() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="Kontakt-container">
        <div className="Kontakt-content">
          <Hours />
          <Informations/>
          <Directions />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Kontakt;
