import '../Styles/App.css';
import Books from './Books';
import List from './List';
import Button from '../Components/ComponentsList/ButtonList';
import useClose from '../Components/ComponentsList/HandleButtonClose';

const Home = () => {
   const { isVisible, handleIconClick } = useClose();
   //{isVisible ? <List lclose={handleIconClick()} /> : <Button show={handleIconClick()} />}

   return (
      <div className="container-general">
         <Books />
      </div>
   );
};
export default Home;
