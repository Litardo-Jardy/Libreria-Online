import "./Styles/App.css"

import { Routes, Route } from "react-router-dom";
import Home from "./Dashboard/Home"
import SignUp from "./Login/SignIn";
import Book from "./Dashboard/Book";

const App = () => {
  
  return (
     <Routes>
       <Route path="/register" element={<SignUp />} />
       <Route path="/home" element={<Home />} />
       <Route path="/home/:book" element={<Book />} />
     </Routes>
  )}
export default App;
