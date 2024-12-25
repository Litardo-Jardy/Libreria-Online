import '../../Styles/Books.css';
import React, { useState } from 'react';
import { IoRocket } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';

interface propsForm {
	showGenere: boolean,
	handleSubmit?: (event: any) => void
}

const useFormulario = (props: propsForm) => {

  const generos = [
    'Todos',
    'Terror',
    'Ciencia ficción',
    'Filosofia',
    'Fantasia'];

  const [genero, setGenero] = useState<string>('Todos');
  const [name, setName] = useState<string>('');

  const handleSelect = (genero: string) => {
    setGenero(genero);
  };

  const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setName(newValue);
  };

  const formularioJSX = (
    <div className='container-formulario' >
      <div>
        <h1 className='title-book'><IoRocket /> AstroChat</h1>
      </div>
      <div className="container-input">
        <form style={{ 'display': 'Flex', 'flexDirection': 'row' }}
          onSubmit={(event) => {
            event.preventDefault();
            if (props.handleSubmit) {
              props.handleSubmit(event);
            }
          }}>
          <input
            className="input"
            type="text"
            placeholder='Buscar por nombre...'
            value={name}
            onChange={handleRange} /><FaSearch className="icon-input-show" style={{ 'position': 'relative', 'top': '16px', 'left': '-20px' }} />
        </form>
      </div>
      {props.showGenere ?
        <div className='container-input-two'>
          {generos.map((element) => (
            <p onClick={() => handleSelect(element)} className='container-generos'>{element}</p>
          ))}
        </div> : null}
    </div>);

  return { genero, name, formularioJSX };
};

export default useFormulario;
