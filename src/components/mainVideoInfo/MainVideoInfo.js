import "./MainVideoInfo.scss";
import eyeIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";
import { Link } from "react-router-dom";

function MainVideoInfo({ currentVideo, displayDate}) {

  if (!currentVideo) {
    return <div>Loading...</div>;
  }
  console.log(currentVideo);

  return (
    <div>
      <Link
        key={currentVideo.id}
        to={`/videos/${currentVideo.id}`}
      >
      <div className="video__infoContainer">
        <h1 className="video__title">{currentVideo.title}</h1>
        <div className="video__info">
          <div className="video__author">
            <h2>By {currentVideo.channel}</h2>
            <h3 className="video__date">{displayDate(currentVideo.timestamp)}</h3>
          </div>
          <div className="video__engagement">
            <div className="video__view">
              <img
                className="video__viewIcon"
                src={eyeIcon}
                alt="eye icon"
              />
              <h3>{currentVideo.views}</h3>
            </div>
            <div className="video__likes">
              <img
                src={likeIcon}
                className="video__likesIcon"
                alt="likes icon"
              />
              <h3>{currentVideo.likes}</h3>
            </div>
          </div>
        </div>
        <p className="video__description">{currentVideo.description}</p>
      </div>
      </Link>
    </div>
    
  );
}

export default MainVideoInfo;