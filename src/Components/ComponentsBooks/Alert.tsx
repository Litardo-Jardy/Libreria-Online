import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useAlert = () => {

  const successAlertBook = (message: string) => {
    toast.success(message, {
      position: 'top-left',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
  };

  const errorAlertBook = (message: string) => {
    toast.error(message, {
      position: 'top-left',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
  };

  const warAlertBook = (message: string) => {
    toast.error(message, {
      position: 'top-left',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
  };

  const notifyAlertBook = (message: string) => {
    toast.info(message, {
      position: 'top-left',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
  };

  const chooseAlert = (message: string, opcion: string) => {
    switch (opcion) {
    case 'success':
      successAlertBook(message);
      break;

    case 'error':
      errorAlertBook(message);
      break;

    case 'info':
      notifyAlertBook(message);
      break;

    case 'war':
      warAlertBook(message);
    }
  };

  const ContainerToast = (
    <ToastContainer theme="colored" />
  );

  return { chooseAlert, ContainerToast };
};

export default useAlert;
