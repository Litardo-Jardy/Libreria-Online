import { useLocation } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

interface propsShare{
  isVisible: boolean}

const Share = (props: propsShare) => {

   const location = useLocation();

   const shareUrl = "http://localhost:3000" + location.pathname;
   const title = "Te envito a leer este maravilloso libro conmigo <3!!"

   return (
     <div style={{"display": `${ props.isVisible ? "flex": "none"}`}} className="container-share-book">
      <FacebookShareButton className="share-book-icon" url={shareUrl} title={title}>
        <FacebookIcon size={25} round />
      </FacebookShareButton>

      <WhatsappShareButton className="share-book-icon" url={shareUrl} title= {title}>
        <WhatsappIcon size={25} round />
      </WhatsappShareButton>

      <TwitterShareButton className="share-book-icon" url={shareUrl}  title={title}>
        <TwitterIcon size={25} round />
      </TwitterShareButton>

      <RedditShareButton className="share-book-icon" url={shareUrl}   title={title}>
        <RedditIcon size={25} round />
      </RedditShareButton>
     </div>
   )}
export default Share;
