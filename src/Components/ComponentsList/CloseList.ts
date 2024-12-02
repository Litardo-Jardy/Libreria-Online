import '../../Styles/List.css';

const Close = (props) =>{
    return(
     <div onClick={props.close} className="button-close-list"><b>x</b></div>
)}
export default Close;
