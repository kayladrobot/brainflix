import Video from "../video/Video";
import "./VideoList.scss";
import { NavLink } from "react-router-dom";

function VideoList({videoData, activeVideoId}) {
  return (
    <section className="video__list">
      <h3 className="video__mainHeader">Next Videos</h3>
      {Array.isArray(videoData) && videoData
      .filter((video) => video.id !== activeVideoId)
        .map((video, index) => (
          <NavLink
            key={index}
            id={video.index}
            to={`/videos/${video.id}`}
          >
            <Video
              id={video.id}
              title={video.title}
              channel={video.channel}
              src={video.image}
            />
          </NavLink>
        ))}
    </section>
  );
}

export default VideoList;