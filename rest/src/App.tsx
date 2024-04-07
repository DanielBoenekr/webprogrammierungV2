// Routen für unterseiten festlegen
//tsx Datei importieren


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/aboutUs/AboutUs';
import Menu from './pages/menu/Menu';
import Reserve from './pages/reserve/Reserve';
import Buisness from './pages/kontakt/Kontakt';
import Impressum from './footerPages/impressum/Impressum';
import Datenschutz from './footerPages/datenschutz/Datenschutz';
import Cookies from './footerPages/cookies/Cookies';

//hier Route festlegen
const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AboutUs />} /> 
      <Route path="/menu" element={<Menu />} /> 
      <Route path="/reservieren" element={<Reserve />} /> 
     <Route path="/kontakt" element={<Buisness />} /> 
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/cookies" element={<Cookies />} />
    </Routes>
  </Router>
);

export default App;

