import MainVideo from "../mainVideo/MainVideo";
import MainVideoInfo from "../mainVideoInfo/MainVideoInfo";

function VideoDetails({currentVideo, videoData, setCurrentVideo, videoId}) {

  return (
    <div>
    {currentVideo && (
        <div className="video__section">
            <MainVideo />
            <MainVideoInfo currentVideo={currentVideo} videoData={videoData} setCurrentVideo={setCurrentVideo}/>
        </div>
    )}
    </div>
  )
}

export default VideoDetails