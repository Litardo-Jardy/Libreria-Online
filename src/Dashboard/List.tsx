import '../Styles/List.css'
import { useDispatch, useSelector} from "react-redux";
import { deleteList } from '../Features/Books/listSlice';
import Close from '../Components/ComponentsList/CloseList';
import useClose from '../Components/ComponentsList/HandleButtonClose';
import useStorage from '../Features/Books/LocalStorage';

interface ListProps{
   lclose: () => void}

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

interface RootList {
  list:{ library: Books[]}}

const List = (props: ListProps) =>{

   const {isVisible } = useClose();
   const list = useSelector((state: RootList) => state.list.library);

   const dispatch = useDispatch();
   const { updateStorage } = useStorage();

   const handleImageClick = (id: string) => () => {
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
              onClick={handleImageClick(state.book.ISBN)}>x</div>
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
