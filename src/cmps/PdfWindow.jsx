import { useState } from 'react';
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfWindow = ({ file }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const next = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    } else {
      setPageNumber(1)
    }
  }

  const prev = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    } else {
      setPageNumber(numPages)
    }
  }

  return (
    <div>
      <div className='p-4 overflow-hidden'>
        <Document file={`./${file}`} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div className='flex z-[1231231231] mt-2 justify-center gap-4'>
        <button onClick={prev} >prev</button>
        <p>{pageNumber} / {numPages}</p>
        <button onClick={next}> next </button>
      </div>
    </div>
  );
}

export default PdfWindow
