import '../../Styles/List.css';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Button = (props) =>{

    const books = useSelector(state => state.list.library);
    
    return(
       <div onClick={props.show} className='button-list'>
          <AiOutlineMenuUnfold className='icon-list' size="35" color="white" />  
         <div className='container-number-list'><p className='number-list'><b>{books.length}</b></p></div>  
       </div>       
    )}
export default Button;
