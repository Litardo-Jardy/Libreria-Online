import '../../Styles/Books.css';

const Window = (props) => {

    return(
     <div className="data-book">
       <p className='button-tree' onClick={props.fut}><b>x</b></p>
        <h2 className='title-window'>{props.title}</h2>
        <div className='container-data'>
        <img className="image-book-two" src={props.url} />

        <div className='descripcion-book'>
        <p>
          <b>
            <p className='title-data' >Synopsis: </p>
            <p className='parrafos'>{props.descripcion}</p>
          </b>
        </p>
    
           <p className='data-two' >
            <b>
               <p className='title-data' >Autor: </p>
               <p className='parrafos'>{props.autor}</p>
            </b>
           </p>
           
           <p className='data-tree'>
             <b>
               <p className='title-data' >Año: </p>
               <p className='parrafos'>{props.annio}</p>
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
            <p className='parrafos'>{props.genero}</p>
         </b>
        </p>

        <div className='button-add-list'>
           <p onClick={props.addList}><b>+ Agregar a lista de lectura</b></p>
        </div>

        </div>
        </div>
     </div>
)}
export default Window;