import "./Styles/App.css"
import Books from "./Components/Books"
import List from "./Components/List"
import Button from "./Components/ComponentsList/ButtonList"
import useClose from "./Components/ComponentsList/HandleButtonClose"
import Login from "./Login/login"

import { Routes, Route } from "react-router-dom";

const App = () => {
  
  const {isVisible, handleIconClick} = useClose();

  return (
     <Routes>
       <Route path="/" element={<Login />} />
     </Routes>
  )}
export default App;
