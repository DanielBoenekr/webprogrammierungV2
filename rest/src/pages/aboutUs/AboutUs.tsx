
import React, { useState } from 'react';
import backgroundImage from "../components/images/backgroundImage.jpg"
import './AboutUs.css';

//importiere der Bilder
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import image1 from "../../components/images/image1.jpg";
import image2 from "../../components/images/image2.jpg";
import image3 from "../../components/images/image3.jpg";
import image4 from "../../components/images/image4.jpg";
import { useEffect, useRef } from 'react';

//Angezeigter Text

function AboutUsText(){
  return(
    <div className='AboutUsDiv'>
    <h3 id='welcome-headline'>Wilkommen bei lêlê</h3>
    <h4 id='welcome-under-headline'>Ihr Ziel für asiatische Fusion-Küche im Herzen Berlins.</h4>
    <p id='AboutUsText'>Entdecken Sie in unserem kleinen, einladenden Lokal eine spannende Auswahl an Gerichten, die traditionelle asiatische Aromen mit einem modernen Twist kombinieren. Im LeLe bringen wir die Geschmacksvielfalt Asiens direkt ins Zentrum Berlins. Besuchen Sie uns und erleben Sie kulinarische Innovation in gemütlicher Atmosphäre</p>
    </div>
  );
}


//Slideshow mit Bildern

function Slideshow() {

//Referenz auf die Bilder & Indikatoren
const slideRef = useRef(null);
const indicatorRef = useRef(null);


useEffect(() => {
  if (slideRef.current) {
    (slideRef.current as HTMLElement).classList.add('active');
  }
  if (indicatorRef.current) {
    (indicatorRef.current as HTMLElement).classList.add('active');
  }
}, []);
  return (
    <div className="slideshow">
      <div className='slide'ref={slideRef}>
        <img src={image1} alt="image1" className='slide-image'/>
      </div>
      <div className='slide'>
        <img src={image2} alt="image2" className='slide-image'/>
      </div>
      <div className='slide'>
        <img src={image3} alt="image3" className='slide-image'/>
      </div>
      <div className='slide'>
        <img src={image4} alt="image4" className='slide-image'/>
      </div>

{/* //Beim clicken wird curren um einen Wert erhöt oder verringert */}

      <a className='arrow arrow-left' onClick={() => changeSlide(-1)}><span>&#10094;</span></a>
      <a className='arrow arrow-right' onClick={() => changeSlide(1)}><span>&#10095;</span></a>
      <ol className='indicator-list'>

{/* Current slide beim clicken auf indikator Updaten */}

        <li className='indicator' ref={indicatorRef} onClick={() => changeSlideIndicator(0)}>&#8226;</li>
        <li className='indicator' onClick={() => changeSlideIndicator(1)}>&#8226;</li>
        <li className='indicator' onClick={() => changeSlideIndicator(2)}>&#8226;</li>
        <li className='indicator' onClick={() => changeSlideIndicator(3)}>&#8226;</li>
      </ol>
    </div>
  );
}

let currentSlide = 0;


//Funktionen für die Slideshow aktive slide ändern Wenn Pfeil geklickt wird
//nur aktive slide wird angezeigt
function changeSlide(n: number) {
  const slides = document.getElementsByClassName('slide');
  const indicators = document.getElementsByClassName('indicator');
  if (currentSlide + n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = (currentSlide + n) % slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).classList.remove('active');
    (indicators[i] as HTMLElement).classList.remove('active');
  }
  (slides[currentSlide] as HTMLElement).classList.add('active');
  (indicators[currentSlide] as HTMLElement).classList.add('active');
}

//Funktion für die Slideshow aktive slide ändern Wenn Indikator geklickt wird
function changeSlideIndicator(n: number) {
  const slides = document.getElementsByClassName('slide');
  const indicators = document.getElementsByClassName('indicator');
  for (let i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).classList.remove('active');
    (indicators[i] as HTMLElement).classList.remove('active');
  }
  (slides[n] as HTMLElement).classList.add('active');
  (indicators[n] as HTMLElement).classList.add('active');
  currentSlide = n;
}

function AboutUs() {
  return (
    <div>
    <header><Header/>
    </header>
    <div className="About-us-container">
      <div className="About-us-content">
      <AboutUsText/>
      <Slideshow />
      </div>
    </div>
    <footer>
    <Footer/>
    </footer>
    </div>
  );
}

export default AboutUs;
