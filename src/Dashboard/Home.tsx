import '../Styles/App.css';
import Books from './Books';
import Button from '../Components/ComponentsList/ButtonList';
import useClose from '../Components/ComponentsList/HandleButtonClose';
import Navbar from './Navbar';

const Home = () => {
   const { isVisible, handleIconClick } = useClose();

   return (
      <div className="container-general">
         {isVisible ? <Navbar lclose={handleIconClick()} /> : <Button show={handleIconClick()} />}
         <Books />
      </div>
   );
};
export default Home;
