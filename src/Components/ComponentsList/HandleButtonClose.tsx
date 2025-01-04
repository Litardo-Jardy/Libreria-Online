import { useState, useEffect } from 'react';

const useClose = () => {
 const [isVisible, setIsVisible] = useState<boolean>(true);
 const handleResize = () => {
  if (window.innerWidth <= 1005) {
   setIsVisible(false);
  } else {
   setIsVisible(true);
  }
 };

 useEffect(() => {
  handleResize();
  window.addEventListener('resize', handleResize);

  return () => {
   window.removeEventListener('resize', handleResize);
  };
 }, []);

 const handleIconClick = () => () => {
  setIsVisible(!isVisible);
 };

 return { isVisible, handleIconClick };
};
export default useClose;
