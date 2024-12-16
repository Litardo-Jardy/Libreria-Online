import { useParams } from "react-router-dom";
import useFormulario from "../Components/ComponentsBooks/Formulario";
import data from "../Features/Books/data.json";
import { Button } from 'antd';
import { LuBookOpen } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FaAddressBook } from "react-icons/fa";

const Book = () => {

   const { genero, name, formularioJSX } = useFormulario(false);

   const { book } = useParams();
   const books = data.library;
   const toShow = books.filter((element) =>
                  (element.book.ISBN === book ));
   return(
      <div style={{ "width": "99%", 
	            "display": "flex", 
                    "flexWrap": "wrap",
		    "justifyContent": "center"}} className="container-books">
        {formularioJSX}
	<div className="container-show-book">
           {toShow.map((element) => (
	     <div className="info-show-book">
	        <div className="info-show-book-main"> 
                   <img 
                     className="image-show-book"
                     alt="Una imagen de libro"
		     src={element.book.cover}
		   />
		   <div className="info-show-book-main-data">
                       <h3>{element.book.author.name} <span><FaRegStar /><CiShare2 /></span></h3>
         	       <h1>{element.book.title}</h1>
		       <p>{element.book.year} - {element.book.pages} paginas</p>
		       <p>{element.book.genere}</p>
		       <div>
                          <Button type="primary"><LuBookOpen /> Leer</Button>
		          <Button type="primary"><FaAddressBook /> Agregar a lista</Button>
		       </div>
		   </div>
		</div>
		<div className="info-show-book-second">
                   <p>{element.book.synopsis}</p>
		</div>
	     </div>
	))} 
	</div>
      </div>
   )}
export default Book;
