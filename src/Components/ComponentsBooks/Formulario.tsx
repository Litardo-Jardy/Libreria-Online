
import React, { useState } from 'react';

const useFormulario = () => {
  const [genero, setGenero] = useState<string>("Todos");
  const [pages, setPages] = useState<number>(1500);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setGenero(newValue)};

  const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = +event.target.value;
    setPages(newValue)};

  const formularioJSX = (
    <div className='container-formulario'>
      <div className='container-input'>
      <label className='label-form'>Filtrar por paginas: </label>
            <input 
              className='input'
              type="range" 
              min="0" 
              max="1500" 
              value={pages}
              onChange={handleRange}/>
      </div>
      <div className='container-input-two'>
      <label className='label-form'>Filtrar por genero: </label>
            <select  value={genero} onChange={handleSelect}  >
              <option value="Todos">Todos</option>
              <option value="Terror">Terror</option>
              <option value="Ciencia ficción">Ciencia ficción</option>
              <option value="Filosofia">Filosofia</option>
              <option value="Fantasia">Fantasia</option>
            </select>
      </div>
    </div>);

  return { genero, pages, formularioJSX }};

export default useFormulario;
