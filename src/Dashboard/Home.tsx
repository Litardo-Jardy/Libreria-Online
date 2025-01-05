import '../Styles/App.css';
import Books from './Books';
import List from './List';
import Button from '../Components/ComponentsList/ButtonList';
import useClose from '../Components/ComponentsList/HandleButtonClose';

const Home = () => {
   const { isVisible, handleIconClick } = useClose();
   return (
      <div className="container-general">
         <Books />
         {isVisible ? <List lclose={handleIconClick()} /> : <Button show={handleIconClick()} />}
      </div>
   );
};
export default Home;
