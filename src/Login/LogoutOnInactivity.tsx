import { useNavigate } from 'react-router-dom';


let timeout: NodeJS.Timeout;

const logoutOnInactivity = () => {

   clearTimeout(timeout);
   timeout = setTimeout(() => {
      alert('Tiempo de inactividad excedido. Cerrando sesión.');
      localStorage.setItem('authenticated', '0');
      window.location.href = '/home/login';
   }, 2000000);
};

export const setupInactivityHandler = () => {
   // Escucha eventos de interacción
   window.addEventListener('mousemove', logoutOnInactivity);
   window.addEventListener('keydown', logoutOnInactivity);
   window.addEventListener('click', logoutOnInactivity);
};
