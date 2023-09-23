import "./Styles/App.css"
import Books from "./Components/Books"
import List from "./Components/List"
import Button from "./Components/ComponentsList/ButtonList"
import useClose from "./Components/ComponentsList/HandleButtonClose"

const App = () => {
  
  const {isVisible, handleIconClick} = useClose();

  return (
    <div className='container-general'>
         <Books />
         {isVisible ? <List lclose={handleIconClick()} />: <Button show={handleIconClick()} />}
    </div>
  )}
export default App;
