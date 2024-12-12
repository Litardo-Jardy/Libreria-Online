import '../Styles/Books.css';
import useFormulario from './ComponentsBooks/Formulario';
import useBooks from './ComponentsBooks/RenderBooks';

const Books = () =>{
     const { genero, name, formularioJSX } = useFormulario();
     const { elements } = useBooks({ genero: genero, name: name});

    return(
      <div className="container-books">
           {formularioJSX}
           {elements}
      </div>)}
export default Books;
