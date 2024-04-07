import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Impressum.css";

function Impressum() {
    return (
      <div>
      <header>
      <Header/>
      </header>
      <div className="Impressum-content">
      <h3 id='ImpressumHeadline'>Impressum</h3>
      <p>Lêlê Restaurant</p>
        <p>Torstraße 132</p>
        <p>10119 Berlin</p>
        <p>Inhaber: Trung Nguyen</p>
        <p>Steuer ID:</p>
        <p>Zuständiges Finanzamt: Berlin</p>
        <p>Phone: +493037479958</p>
        <p >lele.berlin132@gmail.com</p>
      </div>
      <footer>
      <Footer/>
      </footer>
      </div>
    );
  }
  
  export default Impressum;

