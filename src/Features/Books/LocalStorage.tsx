import { useSelector} from "react-redux";

const useStorage = () =>{

   const list = useSelector((state: any) => state.list);
   const updateStorage = () =>{
         localStorage.setItem("Registros", JSON.stringify(list));}

   return { updateStorage }}

export default useStorage;
