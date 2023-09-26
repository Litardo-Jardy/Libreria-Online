import '../Styles/List.css'
import { useDispatch, useSelector} from "react-redux";
import { addBook } from '../Features/Books/bookSlice';
import { deleteList } from '../Features/Books/listSlice';
import Close from './ComponentsList/CloseList';
import useClose from './ComponentsList/HandleButtonClose';
import useStorage from '../Features/Books/LocalStorage';

const List = (props) =>{

   const {isVisible } = useClose();
   const list = useSelector(state => state.list.library);
   const dispatch = useDispatch();
   const { updateStorage } = useStorage();

   const handleImageClick = (id, obj) => () => {
      dispatch(deleteList(id))}

      updateStorage();

    return(
     <div className='container-list'>
       {isVisible ? null: <Close close={props.lclose} />}
          <div>
               <h1 className='title-book'>Lista de lectura</h1>
          </div>
           {list.length > 0 ? (
        
        <div className='container-list-book'>
          {list.map(state => (
            <div className='image-book' key={state.book.ISBN}>
              <div 
              className='button'
              onClick={handleImageClick(state.book.ISBN, {"book": {...state.book}})}>x</div>
              <a href={state.book.link}><img 
                width="150px" 
                height="200px" 
                src={state.book.cover}
                alt={`Portada de ${state.book.title}`} /></a>
            </div>))}
        </div>

      ) : (
       <div className='default-text-list'><p>La lista de lectura está vacía</p></div> )}
     </div>
    )}
export default List;