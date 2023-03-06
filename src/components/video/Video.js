import "./Video.scss";
import { Link } from "react-router-dom";

function Video({
  title,
  channel,
  src,
  id
}) {

  return (
    <Link to={`/videos/${id}`} className="video">
      <div className="video__imageContainer">
        <img className="video__image" src={src} alt={title}></img>
      </div>
      <div className="video__container">
        <h2 className="video__header">{title}</h2>
        <p>{channel}</p>
      </div>
    </Link>
  );
}

export default Video;
