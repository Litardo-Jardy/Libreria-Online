import { useParams } from "react-router-dom";
import useFormulario from "../Components/ComponentsBooks/Formulario";
import data from "../Features/Books/data.json";
import { Button } from 'antd';
import { LuBookOpen } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FaAddressBook } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import useBooks from "../Components/ComponentsBooks/RenderBooks";

const Book = () => {

   const { genero, name, formularioJSX } = useFormulario(false);

   const { book } = useParams();
   const books = data.library;
   const toShow = books.filter((element) =>
                  (element.book.ISBN === book ));
   const { elements } = useBooks({ 
	   genero: toShow[0].book.genere, 
	   name: "", 
	   author: toShow[0].book.author.name,
           isBook: true}) 

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
		   <div className="container-image-show-book">
                   <img 
                     className="image-show-book"
                     alt="Una imagen de libro"
		     src={element.book.cover}
		   />
		   </div>
		   <div className="info-show-book-main-data">
                       <span className="info-show-book-main-data-icons">
		           <Link to="/home" style={{"textDecoration": "none", "color": "#1fb6f2"}} className="info-show-book-main-data-icon">Home</Link>
			   <FaRegStar className="info-show-book-main-data-icon" />
			   <CiShare2 className="info-show-book-main-data-icon" />
		       </span>
                       <h3 style={{"fontSize": "16px"}}>{element.book.author.name} </h3>
         	       <h1 style={{"fontSize":"28px", "marginTop": "-18px"}}>{element.book.title}</h1>
		       <p style={{"fontSize": "13px", "marginTop": "-18px"}}>{element.book.year} - {element.book.pages} paginas</p>
		       <p>{element.book.genere}</p>
		       <div className="info-show-book-button">
                          <Button type="primary"><LuBookOpen /> Leer</Button>
		          <Button type="primary" style={{"backgroundColor": "#183C5C"}}><FaAddressBook /> Agregar a lista de lectura</Button>
		       </div>
		   </div>
		</div>
		<div className="info-show-book-second">
                   <p>{element.book.synopsis}</p>
		</div>
	     </div>
	))} 
	</div>
	<div style={{"width": "85%"}} className="container-books">
	   <h3 style={{ "position": "relative", "top": "20px"}}>Libros relacionados </h3>
           { elements }
	</div>
      </div>
   )}
export default Book;
