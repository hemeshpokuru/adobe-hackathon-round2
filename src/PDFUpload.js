import React from 'react';

const PDFUpload = ({ setUploadedPDF }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== 'application/pdf') return;

    const reader = new FileReader();
    reader.onload = function () {
      const base64PDF = reader.result.split(',')[1];
      setUploadedPDF({ file, base64: base64PDF });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
    </div>
  );
};

export default PDFUpload;
