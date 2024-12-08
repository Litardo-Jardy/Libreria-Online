import "./Styles/App.css"
import Login from "./Login/login"

import { Routes, Route } from "react-router-dom";
import Home from "./Dashboard/Home"
import SignUp from "./Login/SignIn";

const App = () => {
  
  return (
     <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<SignUp />} />
       <Route path="/home" element={<Home />} />
     </Routes>
  )}
export default App;
