import '../Styles/Books.css';
import useFormulario from './ComponentsBooks/Formulario';
import useBooks from './ComponentsBooks/RenderBooks';

const Books = () =>{
     const { genero, pages, formularioJSX } = useFormulario();
     const { elements, filteredBooks } = useBooks({ genero: genero, pages: pages});

    return(
      <div className="container-books">

           <div>
              <h1 className='title-book'>{`Libros disponibles: ${filteredBooks.length}`}</h1>
           </div>

           {formularioJSX}
           {elements}

      </div>)}
export default Books;
