import './Styles/App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Dashboard/Home';
import SignUp from './Login/SignIn';
import Book from './Dashboard/Book';
import Login from './Login/login';
import { setupInactivityHandler } from './Login/LogoutOnInactivity';

const App = () => {

   setupInactivityHandler();

   return (
      <Routes>
         <Route path="/" element={<Navigate to="/home/login" />} />
         <Route path="/home" element={<Home />} />
         <Route path="/home/login" element={<Login />} />
         <Route path="/home/register" element={<SignUp />} />
         <Route path="/home/:book" element={<Book />} />
      </Routes>
   );
};
export default App;
