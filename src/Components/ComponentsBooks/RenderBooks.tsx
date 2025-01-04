import '../../Styles/Books.css';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../Features/Books/listSlice';
import { GrFormView } from 'react-icons/gr';
import { useState } from 'react';
import { BiSolidAddToQueue } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useAlert from './Alert';

interface filters {
	genero: string,
	name: string,
	author: string,
	isBook: boolean
}

// ----------- Books;

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
		otherBooks: string[]
	}
}

interface Books {
	book: Book
}

interface RootBooks {
	books: { library: Books[] }
}


const useBooks = (Filter: filters) => {

 const { chooseAlert, ContainerToast } = useAlert();
 const books = useSelector((state: RootBooks) => state.books.library);
 const dispatch = useDispatch();


 let filteredBooks;

 if (Filter.isBook) {
  filteredBooks = books.filter(({ book }) => (
   (Filter.genero === 'Todos' || book.genere === Filter.genero)
			&& book.title.toLowerCase().includes(Filter.name.toLowerCase())
			|| book.author.name.includes(Filter.author)));
 } else {
  filteredBooks = books.filter(({ book }) => (
   (Filter.genero === 'Todos' || book.genere === Filter.genero)
			&& book.title.toLowerCase().includes(Filter.name.toLowerCase())));
 }

 const handleImageClick = (obj: Books | undefined) => () => {
  chooseAlert('¡Libro agregado con exito!', 'success');
  dispatch(addList(obj));
 };

 const elements = (
  <div className="container-elements">
   {ContainerToast}
   {filteredBooks.length > 0 ? (
    <div className='container-book'>
     {filteredBooks.map(state => (
      <div className='image-book' key={state.book.ISBN}>
       <div
        onClick={handleImageClick(state)}
        className='button-four'> <BiSolidAddToQueue className='icon-two' size='20' /></div>
       <Link to={`/home/${state.book.ISBN}`} >
        <img
         width="135px"
         height="185px"
         alt='Libro'
         className='img-books'
         src={state.book.cover} />
       </Link>
       <div className='info-books'>
        <p className='text-info-books'>{state.book.author.name}</p> <p className='text-info-books' style={{ 'color': '#1fb6f2' }}>{state.book.year}</p>
       </div>


      </div>))}</div>) : <div className='default-text'> <p>No se encontro ningun libro</p></div>}
  </div>);

 return { elements, filteredBooks, handleImageClick };
};
export default useBooks;
