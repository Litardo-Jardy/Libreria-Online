import '../../Styles/Books.css';

interface Author {
  name: string,
  otherBooks: []}

interface Book {
  title: string,
  pages: number,
  genere: string,
  cover: string,
  synopsis: string,
  year: number,
  link: string,
  ISBN: string,
  author: Author}

interface Books {
  book: Book}

interface WindowProps extends Book {
    addList: (obj: Books) => void,
    close: () => void}

const Window = (props: WindowProps) => {
 
    return(
     <div className="data-book">
     </div>
)}
export default Window;
