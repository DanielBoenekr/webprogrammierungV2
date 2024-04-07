import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Menu.css"
import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


//PDF wird von Server geholt mit der Fetch API
function GetMenu(){
  const [numPages, setNumPages] = useState(0);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    fetchPdf().then(setPdfUrl);
  }, []);

// Einzepje Seite des PDF wird gerendert und auf der Seite angezeigt, Text und Annotationen werden nicht gerendert, damit nur die PDF angezeigt wird

  return(
    <div>
 <Document file={pdfUrl} onLoadSuccess={({ numPages }) => setNumPages(numPages) }>
  {Array.from(new Array(numPages), (el, index) => (
     <Page key={`page_${index + 1}`} pageNumber={index + 1} className="pdf-page" renderTextLayer={false} renderMode="canvas" renderAnnotationLayer={false} />
  ))}
</Document>
    </div>
  );
}

//PDF wird von Server geholt (gefechtd)
async function fetchPdf() {
  const response = await fetch('http://localhost:3001/pdf');
  const blob = await response.blob();
  const pdfUrl = URL.createObjectURL(blob);
  return pdfUrl;
}

function Menu() {
 
  return (
    <div>
      <header>
        <Header/>
      </header>
      <div className="Menu-container">
        <div className="Menu-content">
          <h3 id='MenuHeadline'>Speisekarte</h3>
        </div>
        <div className="Menu-pdf">
          <GetMenu/>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Menu;