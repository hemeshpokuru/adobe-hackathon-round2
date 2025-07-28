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
