/*
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
const highlightHeading = (heading) => {
  if (window.adobeDCView && window.adobeDCView.getAPIs) {
    window.adobeDCView.getAPIs().then(apis => {
      apis.gotoLocation(heading.page);  // Jump to the page

      // Add a temporary highlight annotation on the text
      apis.addAnnotations({
        annotationSelector: 'highlight',
        annotations: [
          {
            type: 'highlight',
            pageNumber: heading.page,
            text: heading.text  // or use selector/quadPoints if bounding boxes exist
          }
        ]
      });
    });
  }
  useEffect(() => {
    window.highlightHeading = highlightHeading;
  }, []);
};


export default PdfViewer;
*/

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
