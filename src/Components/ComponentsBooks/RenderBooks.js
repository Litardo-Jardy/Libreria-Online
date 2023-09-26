import '../../Styles/Books.css';
import Window from './windowBook';
import { useDispatch, useSelector} from "react-redux";
import { addList } from '../../Features/Books/listSlice';
import { GrFormView } from 'react-icons/gr';
import { useState } from 'react';
import { BiSolidAddToQueue } from 'react-icons/bi';


const useBooks = (genero, pages) => {
    const books = useSelector(state => state.books.library);
    const dispatch = useDispatch();
    let [bookData, setBookData] = useState([""]);
    const [renWin, setRenWin] = useState(false);
    const [obj, setObj] = useState([""]);

    const filteredBooks = books.filter(state => (
         (genero === "Todos" || state.book.genere === genero) &&
          state.book.pages <= pages));
    
    const handleImageClick = (id, obj) => () => {
        dispatch(addList(obj))}; 

    const handleIconClick = (arrayBooks,obj) => () =>{
        setObj(obj);
        setBookData(arrayBooks);
        setRenWin(true)}
    
    const handleIconClose = () => () =>{
        setRenWin(false)
        console.log(renWin)}

    const elements = (
      <div className="container-elements">
        {renWin ? <Window 
                    addList={handleImageClick(obj.book.ISBN, obj)}
                    fut={handleIconClose()}
                    title={bookData[0]} 
                    url={bookData[1]} 
                    descripcion = {bookData[2]}
                    autor ={bookData[3]}
                    annio = {bookData[4]}
                    pages = {bookData[5]}
                    genero = {bookData[6]}/>: null}
            {filteredBooks.length > 0 ? (
                  <div className='container-book'>
                {filteredBooks.map(state => (
                  <div className='image-book' key={state.book.ISBN}>
                   <div 
                  onClick={handleIconClick( 
                           [state.book.title, 
                            state.book.cover, 
                            state.book.synopsis,
                            state.book.author.name,
                            state.book.year,
                            state.book.pages,
                            state.book.genere], state)}
                   className='button-two'> <GrFormView  className='icon' size='30' /></div>
                   
                    <div 
                    onClick={handleImageClick(state.book.ISBN, state)}
                    className='button-four'> <BiSolidAddToQueue className='icon-two' size='20' /></div>
                  
                   <a href={state.book.link} > <img  
                       width="150px" 
                       height="200px" 
                       src={state.book.cover} /></a> 
                  </div>))}</div>):<div className='default-text'> <p>No se encontro ningun libro</p></div>}
                  </div>);

    return { elements, filteredBooks}}
export default useBooks;