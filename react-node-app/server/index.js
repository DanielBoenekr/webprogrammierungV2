
//backend server
//Port 3001 festlegen

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const cors = require('cors');


app.use(cors());


const path = require('path');
const fs = require('fs');
 
//api endpoint für pdf festlegen, um später pdf zu laden
app.get('/pdf', (req, res) => {
  const filePath = path.join(__dirname, '../pdfs/lelemenu.pdf');
  fs.readFile(filePath , function (err,data){
    if (err) {
      console.error('Error reading PDF file:', err);
      res.status(500).send('Error reading PDF file');
      return;
    }
    res.contentType("application/pdf");
    res.send(data);
  });
});


//Server starten
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});