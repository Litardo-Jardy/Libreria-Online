import { useSelector } from 'react-redux';

const useStorage = () => {

   const list = useSelector((state: any) => state.list);
   const updateStorage = (): void => {
      localStorage.setItem('Registros', JSON.stringify(list));
   };

   const clearStorage = () => {
      localStorage.removeItem('Registros');
   };

   return { updateStorage, clearStorage };
};

export default useStorage;
