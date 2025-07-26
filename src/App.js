import React from 'react';
import PdfViewer from './PdfViewer';
import OutlineSidebar from './OutlineSidebar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <OutlineSidebar />
      <PdfViewer />
    </div>
  );
}

export default App;
