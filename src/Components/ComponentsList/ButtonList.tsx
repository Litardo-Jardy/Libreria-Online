import '../../Styles/List.css';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useSelector } from 'react-redux';

interface ButtonProps {
	show: () => void
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

const Button = (props: ButtonProps) => {

  const books = useSelector((state: RootList) => state.list.library);

  return (
    <div onClick={props.show} className='button-list'>
      <AiOutlineMenuUnfold className='icon-list' size="35" color="white" />
      <div className='container-number-list'><p className='number-list'><b>{books.length}</b></p></div>
    </div>
  );
};
export default Button;
