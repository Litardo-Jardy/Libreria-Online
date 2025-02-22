import '../Styles/Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList } from '../Features/Books/listSlice';
import Close from '../Components/ComponentsList/CloseList';
import useClose from '../Components/ComponentsList/HandleButtonClose';
import useStorage from '../Features/Books/LocalStorage';
import { IoMenu } from 'react-icons/io5';
import { FaBookReader, FaHome, FaHouseUser, FaLock, FaRegUser, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

interface ListProps {
	lclose: () => void
}

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

const Navbar = (props: ListProps) => {

   const { isVisible } = useClose();
   const list = useSelector((state: RootList) => state.list.library);

   const dispatch = useDispatch();
   const { updateStorage } = useStorage();

   const handleImageClick = (id: string) => () => {
      dispatch(deleteList(id));
   };

   updateStorage();
   const closeSession = () => {
      localStorage.setItem('authenticated', '0');
   };

   return (
      <div className='container-navbar'>
         {isVisible ? null : <Close close={props.lclose} />}
         <div>
            <h1 className='title-menu'><IoMenu style={{ 'position': 'relative', 'left': '15px', 'top': '5px' }} size="40" /></h1>
         </div>

         <div className='container-list-book'>
            <NavLink className='link-navbar' to='/home'><p className='text-link-navbar'> <FaHome /> - Home</p></NavLink>
            <NavLink className='link-navbar' to='/home/list'><p className='text-link-navbar'> <FaBookReader /> - Lista de lectura <span className='list-length'>{list.length} </span></p></NavLink>
            <NavLink className='link-navbar' to='/home/login'><p onClick={closeSession} className='text-link-navbar'> <FaLock /> - Cerrar sesion</p></NavLink>
         </div>
      </div>
   );
};
export default Navbar;
