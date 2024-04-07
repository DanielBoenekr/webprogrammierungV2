import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Cookies.css";

function Cookies() {
    return (
      <div>
      <header>
      <Header/>
      </header>
      <div className="Cookies-content">
      <h3 id='CookiesHeadline'>Cookies</h3>
      <p>Da es sich bei der Website um eine Uni-Abgabe handelt die local ausgeführt wird, müssen Sie sich um Coookies keine sorgen machen.</p>
      </div>
      <footer>
      <Footer/>
      </footer>
      </div>
    );
  }
  
  export default Cookies;

