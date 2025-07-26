import React from 'react';
import './App.css';

const keywordMap = {
  Student: ["example", "definition", "exam", "summary"],
  Researcher: ["methodology", "dataset", "benchmark", "model"],
  Analyst: ["revenue", "growth", "strategy", "investment"]
};

const KeywordHighlighter = ({ persona }) => {
  if (!persona) return null;

  const keywords = keywordMap[persona] || [];

  const searchKeyword = (word) => {
    if (window.AdobeDC) {
      window.AdobeDC.View.getPDFViewer().getAPIs().then((apis) => {
        apis.search({ query: word });
      });
    }
  };

  return (
    <div className="keywords-box">
      <h4>🔍 Focus Terms for {persona}</h4>
      <div className="keywords-list">
        {keywords.map((word, idx) => (
          <button key={idx} onClick={() => searchKeyword(word)} className="keyword-btn">
            {word}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeywordHighlighter;
