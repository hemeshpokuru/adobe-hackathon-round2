import React, { useState } from 'react';
import PdfViewer from './PdfViewer';
import OutlineSidebar from './OutlineSidebar';
import PersonaSelector from './PersonaSelector';
import KeywordHighlighter from './KeywordHighlighter';
import PDFUpload from './PDFUpload';
import './App.css';

function App() {
  const [persona, setPersona] = useState("");
  const [uploadedPDF, setUploadedPDF] = useState(null);

  return (
    <div className="app-container">
      <div>
        <PDFUpload setUploadedPDF={setUploadedPDF} />
        <PersonaSelector persona={persona} setPersona={setPersona} />
        <KeywordHighlighter persona={persona} />
        {uploadedPDF && <OutlineSidebar />}
      </div>
      <PdfViewer uploadedPDF={uploadedPDF} />
    </div>
  );
}

export default App;
