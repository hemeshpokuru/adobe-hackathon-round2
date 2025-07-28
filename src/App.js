/*
import React, { useState } from 'react';
import PdfViewer from './PdfViewer';
import OutlineSidebar from './OutlineSidebar';
import PersonaSelector from './PersonaSelector';
import './App.css';

function App() {
  const [persona, setPersona] = useState("");

  return (
    <div className="app-container">
      <div>
        <PersonaSelector persona={persona} setPersona={setPersona} />
        <OutlineSidebar />
      </div>
      <PdfViewer />
    </div>
  );
}

export default App;
*/

import React, { useState } from 'react';
import PdfViewer from './PdfViewer';
import OutlineSidebar from './OutlineSidebar';
import PersonaSelector from './PersonaSelector';
import './App.css';

function App() {
  const [persona, setPersona] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  return (
    <div className="app-container">
      <div>
        <PersonaSelector persona={persona} setPersona={setPersona} />
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        <OutlineSidebar />
      </div>
      <PdfViewer file={pdfFile} />
    </div>
  );
}

export default App;
