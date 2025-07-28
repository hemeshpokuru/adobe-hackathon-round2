/*
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
*/

import React, { useState } from 'react';
import PdfViewer from './PdfViewer';
import OutlineSidebar from './OutlineSidebar';
import PersonaSelector from './PersonaSelector';
import './App.css';

function App() {
  const [persona, setPersona] = useState("");
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
    }
  };

  return (
    <div className="app-container">
      <div className="left-panel">
        <PersonaSelector persona={persona} setPersona={setPersona} />

        <div className="file-upload-container">
          <label htmlFor="file-upload" className="file-upload-label">
            📄 Upload PDF
          </label>
          <input
            id="file-upload"
            type="file"
            accept="application/pdf"
            onChange={handleFileUpload}
            className="file-upload-input"
          />
          {file && <p className="file-name">{file.name}</p>}
        </div>

        <OutlineSidebar />
      </div>

      <PdfViewer file={file} />
    </div>
  );
}

export default App;
