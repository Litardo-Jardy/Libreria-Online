import '../Styles/ViewPdf.css';
import { useState } from 'react';
import Pdf from 'react-pdf-js';
import { useParams } from 'react-router-dom';
import ButtonList from '../Components/ComponentsList/ButtonList';
import useClose from '../Components/ComponentsList/HandleButtonClose';
import data from '../Features/Books/data.json';
import Navbar from './Navbar';
import { Document, Page } from 'react-pdf';
import ReactFlipPage from 'react-flip-page';

const ViewPdf = () => {

   const { book } = useParams();

   const books = data.library;
   const toShow = books.filter(element =>
      (element.book.ISBN === book));

   const [numPages, setNumPages] = useState<number>(0);
   const [pageNumber, setPageNumber] = useState<number>(1);

   function onLoadSuccess({ numPages }: any) {
      setNumPages(numPages);
   }

   const { isVisible, handleIconClick } = useClose();

   return (
      <div className='container-viewpdf'>
         <iframe
            src={toShow[0].book.link}
            title="Flipbook"
            width="100%"
            height="100%"
            allowFullScreen={true}
            style={{ border: 'none' }}
         ></iframe>
      </div>

   );
};
export default ViewPdf;
