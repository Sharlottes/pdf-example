import React from 'react'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import PdfFile from '../pdf/dummy.pdf';

export default function Home() {
  const [numPages, setNumPages] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(1);

  return (
    <div>
      <a href={PdfFile}> download pdf </a>
      <Document file={PdfFile} onLoadSuccess={(pdf) => setNumPages(pdf.numPages)}>
        <Page pageNumber={pageNumber} />
      </Document>
      Page {pageNumber} of {numPages}
    </div>
  )
}
