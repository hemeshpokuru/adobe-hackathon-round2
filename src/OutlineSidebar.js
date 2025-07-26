import React, { useEffect, useState } from 'react';
import './App.css';

const OutlineSidebar = () => {
  const [outline, setOutline] = useState([]);

  useEffect(() => {
    // Fetch the JSON outline
    fetch('/sample.json')
      .then((res) => res.json())
      .then((data) => {
        setOutline(data.outline);
      });
  }, []);

  // Navigate to specific page
  const goToPage = (pageNum) => {
    if (window.AdobeDC) {
      window.AdobeDC.View.getPDFViewer().getAPIs().then((apis) => {
        apis.gotoLocation({ pageNumber: pageNum });
      });
    }
  };

  return (
    <div className="sidebar">
      <h3>📑 Outline</h3>
      <ul>
        {outline.map((item, index) => (
          <li
            key={index}
            onClick={() => goToPage(item.page)}
            className={`heading ${item.level.toLowerCase()}`}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutlineSidebar;
