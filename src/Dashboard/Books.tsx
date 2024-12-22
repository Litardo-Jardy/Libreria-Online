import '../Styles/Books.css';
import useFormulario from '../Components/ComponentsBooks/Formulario';
import useBooks from '../Components/ComponentsBooks/RenderBooks';

const Books = () =>{
     const { genero, name, formularioJSX } = useFormulario({showGenere: false});
     const { elements } = useBooks({ genero: genero, name: name, author: "", isBook: false});

    return(
      <div className="container-books">
           {formularioJSX}
           {elements}
      </div>)}
export default Books;
