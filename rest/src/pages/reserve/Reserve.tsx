import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Reserve.css";


//Reservierungsseite mit Telefonnummer und Link zur Reservierung
//Nur Standart HTML Code


function Reserve() {
    return (
      <div>
      <header>
      <Header/>
      </header>
      <div className="Reserve-container">
      <div className="Reserve-content">
      <h3 id='ReserveHeadline'>Reservieren</h3>
     
      <p>Entweder <a href="https://www.google.com/maps/reserve/v/dine/c/6SaC9uiAt0Q?source=pa&opi=89978449&hl=de-DE&gei=jt4PZpbVDraOxc8P9pml4Aw&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fclient%3Dopera-gx%26q%3Dlele%2Bberlin%26sourceid%3Dopera%26ie%3DUTF-8%26oe%3DUTF-8&ihs=3">
      hier </a>clicken um zur Reservierung zu gelangen oder Anrufen unter:</p>
      <p id="telNumber"> 030 37479958</p>
      <p>Wir freuen uns auf Ihren Besuch!</p>
      </div>
      </div>
      <footer>
      <Footer/>
      </footer>
      </div>
    );
  }
  
  export default Reserve;