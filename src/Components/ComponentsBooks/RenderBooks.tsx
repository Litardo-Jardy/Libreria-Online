import '../../Styles/Books.css';
import Window from './windowBook';
import { useDispatch, useSelector} from "react-redux";
import { addList } from '../../Features/Books/listSlice';
import { GrFormView } from 'react-icons/gr';
import { useState } from 'react';
import { BiSolidAddToQueue } from 'react-icons/bi';

interface filters {
    genero: string,
    name: string}

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
    otherBooks: []}}

interface Books {
  book: Book}

interface RootBooks {
  books:{ library: Books[]}}


const useBooks = ( Filter: filters) => {

    const books = useSelector((state: RootBooks) => state.books.library);
    const dispatch = useDispatch();

    let [bookData, setBookData] = useState<(String | number)[]>([""]);
    const [renWin, setRenWin] = useState<boolean>(false);
    const [obj, setObj] = useState<Books | undefined>();

    const filteredBooks = books.filter(({ book }) => (
         (Filter.genero === "Todos" || book.genere === Filter.genero) &&
          book.title.toLowerCase().includes(Filter.name.toLowerCase())));
    
    const handleImageClick = (obj: Books | undefined ) => () => {
        dispatch(addList(obj))}; 

    const handleIconClick = (arrayBooks: (String | number)[], obj: Books | undefined) => () =>{
        setObj(obj);
        setBookData(arrayBooks);
        setRenWin(true)}
    
    const handleIconClose = () => () =>{
        setRenWin(false)
        console.log(renWin)}

    const elements = (
      <div className="container-elements">
        {renWin ? <Window 
                    addList={handleImageClick(obj)}
                    close={handleIconClose()}
                    title={bookData[0].toString()} 
                    cover={bookData[1].toString()} 
                    synopsis = {bookData[2].toString()}
                    author={{name: bookData[3].toString(), otherBooks: []}}
                    year = {+bookData[4]}
                    pages = {+bookData[5]}
		    ISBN = "0"
		    link = "..."
                    genere = {bookData[6].toString()}/>: null}
            {filteredBooks.length > 0 ? (
                  <div className='container-book'>
                {filteredBooks.map(state => (
                  <div className='image-book' key={state.book.ISBN}>
                    <div 
                  //onClick={handleIconClick( 
                  //         [state.book.title, 
                  //        state.book.cover, 
                  //          state.book.synopsis,
                  //          state.book.author.name,
                  //          state.book.year,
                  //          state.book.pages,
                  //          state.book.genere], state)}
                  // className='button-two'> <GrFormView  className='icon' size='30' /></div>
                  //
                  //  <div 
                    onClick={handleImageClick(state)}
                    className='button-four'> <BiSolidAddToQueue className='icon-two' size='20' /></div>
                  
                   <a href={state.book.link} > 
		      <img  
                       width="135px" 
                       height="185px" 
		       alt='Libro'
		       className='img-books'
                       src={state.book.cover} />
		   </a> 
                   <div className='info-books'>
		      <p className='text-info-books'>{state.book.author.name}</p> <p className='text-info-books' style={{ "color": "#1fb6f2"}}>{state.book.year}</p>
		   </div>


                  </div>))}</div>):<div className='default-text'> <p>No se encontro ningun libro</p></div>}
                  </div>);

    return { elements, filteredBooks}}
export default useBooks;
