import '../Styles/App.css';
import Books from './Books';
import ButtonList from '../Components/ComponentsList/ButtonList';
import useClose from '../Components/ComponentsList/HandleButtonClose';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
   const { isVisible, handleIconClick } = useClose();
   const navegation = useNavigate();
   const validation = localStorage.getItem('authenticated');

   useEffect(() => {

      if (validation != '1') {
         navegation('/home/login');
      }

   }, []);

   return (
      <div className="container-general">
         {isVisible ? <Navbar lclose={handleIconClick()} /> : <ButtonList show={handleIconClick()} />}
         <Books />
      </div>
   );
};
export default Home;
