import "./Styles/App.css"

import { Routes, Route } from "react-router-dom";
import Home from "./Dashboard/Home"
import SignUp from "./Login/SignIn";

const App = () => {
  
  return (
     <Routes>
       <Route path="/register" element={<SignUp />} />
       <Route path="/home/:id" element={<Home />} />
     </Routes>
  )}
export default App;
