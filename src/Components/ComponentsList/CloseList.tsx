import '../../Styles/Navbar.css';

interface PropsClose {
	close: () => void
}

const Close = (props: PropsClose) => {
   return (
      <div onClick={props.close} className="button-close-list"><b>x</b></div>
   );
};
export default Close;
