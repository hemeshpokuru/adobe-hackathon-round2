import React, { useEffect } from 'react';

const PdfViewer = () => {
  useEffect(() => {
    // Wait for Adobe API to be ready
    if (window.AdobeDC) {
      loadPDF();
    } else {
      document.addEventListener("adobe_dc_view_sdk.ready", loadPDF);
    }

    function loadPDF() {
      const adobeDCView = new window.AdobeDC.View({
        clientId: "4c9fb13580e3496db2eb7faee352be41", // ⬅️ Replace this!
        divId: "adobe-dc-view"
      });

      adobeDCView.previewFile({
        content: {
          location: {
            url: "/sample.pdf"
          }
        },
        metaData: {
          fileName: "sample.pdf"
        }
      }, {
        embedMode: "SIZED_CONTAINER"
      });
    }
  }, []);

  return (
    <div id="adobe-dc-view" style={{ height: "600px", width: "100%" }}></div>
  );
};

export default PdfViewer;
