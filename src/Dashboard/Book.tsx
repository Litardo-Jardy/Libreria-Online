import { useNavigate, useParams } from 'react-router-dom';
import ButtonList from '../Components/ComponentsList/ButtonList';
import useFormulario from '../Components/ComponentsBooks/Formulario';
import data from '../Features/Books/data.json';
import { Button } from 'antd';
import { LuBookOpen } from 'react-icons/lu';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { CiShare2 } from 'react-icons/ci';
import { FaAddressBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useBooks from '../Components/ComponentsBooks/RenderBooks';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { deleteList } from '../Features/Books/listSlice';
import Share from '../Components/ComponentsBooks/ShareBooks';
import { useEffect, useState } from 'react';
import useAlert from '../Components/ComponentsBooks/Alert';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import useClose from '../Components/ComponentsList/HandleButtonClose';

interface Book {
	title: string,
	pages: number,
	genere: string,
	cover: string,
	synopsis: string,
	year: number,
	link: string,
	ISBN: string,
	author: {
		name: string,
		otherBooks: []
	}
}

interface Books {
	book: Book
}

interface RootList {
	list: { library: Books[] }
}

const Book = () => {

   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const { chooseAlert, ContainerToast } = useAlert();
   const { name, formularioJSX } = useFormulario({ showGenere: false, handleSubmit: searchBook });
   const list = useSelector((state: RootList) => state.list.library);
   const dispatch = useDispatch();
   const navegite = useNavigate();

   const deleteImageClick = (id: string) => () => {
      dispatch(deleteList(id));
      toast.dismiss();
      chooseAlert('¡Libro eliminado con exito!', 'info');
   };

   const { book } = useParams();
   const books = data.library;
   const toShow = books.filter(element =>
      (element.book.ISBN === book));
   const { elements, filteredBooks, handleImageClick } = useBooks({
      genero: toShow[0].book.genere,
      name: '',
      author: toShow[0].book.author.name,
      isBook: true
   });

   const isList = list.some(element => element.book.ISBN === book);

   const [visible, setVisible] = useState<boolean>(false);
   const changeVisibleShare = () => {
      setVisible(!visible);
   };

   function searchBook(event: React.FormEvent<HTMLInputElement>) {
      event.preventDefault();
      const newBook = books.find(element => element.book.title.toLowerCase().includes(name.toLowerCase()));
      if (newBook && name.length >= 2) {
         navegite(`/home/${newBook.book.ISBN}`);
      } else {
         chooseAlert(`El libro ${name} no existe`, 'war');
      }
   }

   const { isVisible, handleIconClick } = useClose();

   //const changeToUrl = () => {
   //
   //};
   //


   const validation = localStorage.getItem('authenticated');

   useEffect(() => {

      if (validation != '1') {
         navegite('/home/login');
      }

   }, []);
   return (
      <div style={{
         'width': '99%',
         'display': 'flex',
         'flexWrap': 'wrap',
         'justifyContent': 'center'
      }} className="container-books">
         {formularioJSX}

         <div className="container-show-book">
            {ContainerToast}
            {toShow.map(element => (
               <div key={element.book.ISBN} className="info-show-book">
                  <div className="info-show-book-main">
                     <div className="container-image-show-book">
                        <img
                           className="image-show-book"
                           alt="Una imagen de libro"
                           src={element.book.cover}
                        />
                     </div>
                     <div className="info-show-book-main-data">
                        <span className="info-show-book-main-data-icons">
                           <Link to="/home" style={{ 'textDecoration': 'none', 'color': '#1fb6f2' }} className="info-show-book-main-data-icon">Home</Link>
                           {isList ?
                              <FaStar style={{ 'color': 'yellow' }} className="info-show-book-main-data-icon" /> :
                              <FaRegStar className="info-show-book-main-data-icon" />}
                           <CiShare2 onClick={changeVisibleShare} className="info-show-book-main-data-icon" />
                        </span>
                        <Share nameBook={element.book.title} isVisible={visible} />
                        <h3 style={{ 'fontSize': '16px' }}>{element.book.author.name} </h3>
                        <h1 style={{ 'fontSize': '28px', 'marginTop': '-18px' }}>{element.book.title}</h1>
                        <p style={{ 'fontSize': '13px', 'marginTop': '-18px' }}>{element.book.year} - {element.book.pages} paginas</p>
                        <p>{element.book.genere}</p>
                        <div className="info-show-book-button">
                           <Button type='primary'><LuBookOpen /> Leer</Button>
                           {isList ?
                              <Button
                                 className="button-show-card"
                                 type="primary"
                                 onClick={deleteImageClick(toShow[0].book.ISBN)}
                                 style={{ 'backgroundColor': '#183C5C' }}>
                                 <MdDelete size="18" /> Eliminar de lista de lectura</Button> :
                              <Button
                                 className="button-show-card"
                                 type="primary"
                                 onClick={handleImageClick(toShow[0])}
                                 style={{ 'backgroundColor': '#183C5C' }}>
                                 <FaAddressBook /> Agregar a lista de lectura</Button>
                           }
                        </div>
                     </div>
                  </div>
                  <div className="info-show-book-second">
                     <p style={{ 'textAlign': 'center' }}>{element.book.synopsis}</p>
                  </div>
               </div>
            ))}
         </div>
         <div style={{ 'width': '90%' }} className="container-books">
            <h3 style={{ 'position': 'relative', 'top': '20px' }}>Libros relacionados </h3>
            <span style={{ 'position': 'relative', 'top': `${filteredBooks.length <= 7 && windowWidth >= 990 ? '-100px' : '0'}` }}> {elements} </span>
         </div>
      </div>
   );
};
export default Book;
