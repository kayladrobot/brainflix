import "./MainVideo.scss";
import ReactPlayer from "react-player";
import { API_KEY, BASE_URL } from "../../init";

function MainVideo({ currentVideo, videoId}) {
  console.log(currentVideo);

  const video = currentVideo ? currentVideo : null;

  return (
    <div>
      {video && (
        <ReactPlayer
          video={`${BASE_URL}videos/${videoId}?=api_key${API_KEY}`}
          width="100%"
          height="auto"
          controls={true}
          className="video__main"
        />
      )}
    </div>
  );
}

export default MainVideo;
