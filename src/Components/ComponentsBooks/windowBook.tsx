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
       <p className='button-tree' onClick={props.close}><b>x</b></p>
        <h2 className='title-window'>{props.title}</h2>
        <div className='container-data'>
        <img className="image-book-two" src={props.link} />

        <div className='descripcion-book'>
        <p>
          <b>
            <p className='title-data' >Synopsis: </p>
            <p className='parrafos'>{props.synopsis}</p>
          </b>
        </p>
    
           <p className='data-two' >
            <b>
               <p className='title-data' >Autor: </p>
               <p className='parrafos'>{props.author.name}</p>
            </b>
           </p>
           
           <p className='data-tree'>
             <b>
               <p className='title-data' >Año: </p>
               <p className='parrafos'>{props.year}</p>
             </b>
           </p>
    
        <p className='data-two'>
         <b>
            <p className='title-data' >Paginas: </p>
            <p className='parrafos'>{props.pages}</p>
         </b>
        </p>
        
        <p className='data-tree'>
         <b>
            <p className='title-data' >Genero: </p>
            <p className='parrafos'>{props.genere}</p>
         </b>
        </p>

        <div className='button-add-list'>
           <p 
onClick={() => props.addList}><b>+ Agregar a lista de lectura</b></p>
        </div>

        </div>
        </div>
     </div>
)}
export default Window;
