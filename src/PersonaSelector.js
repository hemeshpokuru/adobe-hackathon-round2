import React, { useState } from 'react';
import './App.css';

const summaries = {
  Student: "This PDF introduces the concept of AI with examples. Focus on 'Applications' section to understand real-world use cases.",
  Researcher: "Look into 'History of AI' and 'Applications' for prior work and current domains.",
  Analyst: "Focus on financial and business examples under 'Applications'."
};

const PersonaSelector = ({ persona, setPersona }) => {
  return (
    <div className="persona-box">
      <h3>🧍 Select Persona</h3>
      <select value={persona} onChange={(e) => setPersona(e.target.value)}>
        <option value="">-- Choose --</option>
        <option value="Student">Student</option>
        <option value="Researcher">Researcher</option>
        <option value="Analyst">Analyst</option>
      </select>
      {persona && (
        <div className="summary-box">
          <strong>Suggested Focus:</strong>
          <p>{summaries[persona]}</p>
        </div>
      )}
    </div>
  );
};

export default PersonaSelector;
