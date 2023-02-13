import "./MainVideoInfo";
import "./MainVideoInfo.scss";
import eyeIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";

function MainVideoInfo({ currentVideo }) {

  const date = new Date(currentVideo.timestamp);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const year = date.getFullYear();
  const dateString = `${month}/${day}/${year}`;

  return (
    <div>
      <div className="video__infoContainer">
        <h1 className="video__title">{currentVideo.title}</h1>
        <div className="video__info">
          <div className="video__author">
            <h2>By {currentVideo.channel}</h2>
            <h3 className="video__date">{dateString}</h3>
          </div>
          <div className="video__engagement">
            <div className="video__view">
              <img className="video__viewIcon" src={eyeIcon} alt="eye icon" />
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
    </div>
  );
}

export default MainVideoInfo;
