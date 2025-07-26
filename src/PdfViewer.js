import React, { useEffect } from 'react';

const PdfViewer = ({ uploadedPDF }) => {
  useEffect(() => {
    if (!uploadedPDF) return;

    const showPDF = () => {
      const adobeDCView = new window.AdobeDC.View({
        clientId: "4c9fb13580e3496db2eb7faee352be41",
        divId: "adobe-dc-view"
      });

      adobeDCView.previewFile({
        content: {
          promise: Promise.resolve(uploadedPDF.base64)
        },
        metaData: {
          fileName: uploadedPDF.file.name
        }
      }, { embedMode: "SIZED_CONTAINER" });
    };

    if (window.AdobeDC) showPDF();
    else document.addEventListener("adobe_dc_view_sdk.ready", showPDF);
  }, [uploadedPDF]);

  return <div id="adobe-dc-view" style={{ height: "600px", width: "100%" }}></div>;
};

export default PdfViewer;
