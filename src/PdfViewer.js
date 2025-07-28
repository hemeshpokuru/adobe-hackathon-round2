import React, { useEffect } from 'react';

const PdfViewer = () => {
  useEffect(() => {
    const adobeDCView = new window.AdobeDC.View({
      clientId: "4c9fb13580e3496db2eb7faee352be41",
      divId: "adobe-dc-view"
    });

    adobeDCView.previewFile({
      content: {
        location: {
          url: "sample.pdf"
        }
      },
      metaData: {
        fileName: "sample.pdf"
      }
    });
  }, []);

  return <div id="adobe-dc-view" style={{ height: '800px' }}></div>;
};

export default PdfViewer;