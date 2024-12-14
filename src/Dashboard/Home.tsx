import "../Styles/App.css"
import Books from "./Books"
import List from "./List"
import Button from "../Components/ComponentsList/ButtonList"
import useClose from "../Components/ComponentsList/HandleButtonClose"
//import { useNavigate, useParams } from "react-router-dom"
//import useStorage from "../Features/Books/LocalStorage"
//import { useEffect, useState } from "react"

const Home = () => {
   //const { id } = useParams();
   //const [reload, setReload] = useState(false);
   const {isVisible, handleIconClick} = useClose();
   //const { clearStorage } = useStorage();
   //const navegate = useNavigate();

   //useEffect(() => {
   //  if(!reload && id == "nouveau"){
   //    clearStorage();
   //    setReload(true);   
   //    navegate("/home/nouveau")
   //    window.location.reload()}
   //
   //},[reload])

   return(
    <div className="container-general">
      <Books />
      {isVisible ? <List lclose={handleIconClick()} />: <Button show={handleIconClick()} />}
    </div>
   )}
export default Home;
