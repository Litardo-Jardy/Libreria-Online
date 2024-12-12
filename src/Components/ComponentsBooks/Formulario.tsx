
import React, { useState } from 'react';
import { IoRocket } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const useFormulario = () => {

  const generos = [
    "Todos",
    "Terror",
    "Ciencia ficción",
    "Filosofia",
    "Fantasia"]

  const [genero, setGenero] = useState<string>("Todos");
  const [name, setName] = useState<string>("");

  const handleSelect = (genero: string) => {
    setGenero(genero)};

  const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setName(newValue)};

  const formularioJSX = (
    <div className='container-formulario'>
      <div>
        <h1 className='title-book'><IoRocket  /> AstroChat</h1>
      </div>
      <div className='container-input'>
            <input 
              className='input'
              type="text" 
	      placeholder='Buscar por nombre...'
              value={name}
              onChange={handleRange}/><FaSearch style={{ "position": 'relative', "top": "20px", "left": "-20px"}} />
      </div>
      <div className='container-input-two'>
          {generos.map((element) => (
	     <p onClick={() => handleSelect(element)} className='container-generos'>{element}</p> 
	  ))}
      </div>
    </div>);

  return { genero, name, formularioJSX }};

export default useFormulario;
