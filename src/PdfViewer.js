import React, { useEffect, useRef } from 'react';

const PdfViewer = ({ file }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!file || !window.AdobeDC) return;

    const adobeDCView = new window.AdobeDC.View({
      clientId: "4c9fb13580e3496db2eb7faee352be41", // Replace with your actual API key
      divId: "adobe-dc-view",
    });

    const filePromise = file.arrayBuffer();

    adobeDCView.previewFile({
      content: {
        promise: filePromise,
      },
      metaData: {
        fileName: file.name,
      },
    });
  }, [file]);

  return <div id="adobe-dc-view" ref={viewerRef} style={{ height: '800px' }}></div>;
};

export default PdfViewer;
