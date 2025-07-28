import React, { useState } from 'react';
import PdfViewer from './PdfViewer';
import OutlineSidebar from './OutlineSidebar';
import PersonaSelector from './PersonaSelector';
import KeywordHighlighter from './KeywordHighlighter';
import './App.css';

function App() {
  const [persona, setPersona] = useState("");

  return (
    <div className="app-container">
      <div>
        <PersonaSelector persona={persona} setPersona={setPersona} />
        <KeywordHighlighter persona={persona} />
        <OutlineSidebar />
      </div>
      <PdfViewer />
    </div>
  );
}

export default App;
