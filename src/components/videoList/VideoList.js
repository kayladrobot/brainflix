import Video from "../video/Video";
import "./VideoList.scss";
import { Link } from "react-router-dom";

function VideoList({ videoData, activeVideoId, changeActiveVideo, videoId}) {


  return (
    <section className="video__list">
      <h3 className="video__mainHeader">Next Videos</h3>
      {videoData.filter(video => {
        return video.id !== activeVideoId;
      })
    .map((video, index) => (
      <Link
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
      </Link>
    ))}
    </section>
  );
}

export default VideoList;
