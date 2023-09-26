import { useSelector} from "react-redux";

const useStorage = () =>{

   const list = useSelector(state => state.list);
   const updateStorage = () =>{
         localStorage.setItem("Registros", JSON.stringify(list));}

   return { updateStorage }}

export default useStorage;