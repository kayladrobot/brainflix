import "./VideoSection.scss";
import VideoList from "../videoList/VideoList";
import MainVideo from "../mainVideo/MainVideo";
import MainVideoInfo from "../mainVideoInfo/MainVideoInfo";
import videoDetails from "../../data/video-details.json";
import videos from "../../data/videos.json";
import Comments from "../comments/Comments";
import React, { useState } from "react";

const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

  const changeVideo = (id) => {
    const selectedVideo = videoDetails.find((video) => {
      return video.id === id;
    });

    setCurrentVideo(selectedVideo);
  };

  return (
    <div>
      <MainVideo currentVideo={currentVideo} />
      <div className="video__section">
        <div>
          <MainVideoInfo currentVideo={currentVideo} videoData={videoDetails} />
          <Comments currentVideo={currentVideo} key={currentVideo.id}/>
        </div>
        <VideoList
          key={currentVideo.id}
          changeActiveVideo={changeVideo}
          videoInfo={videos}
          activeVideoId={currentVideo.id}
        />
      </div>
    </div>
  );
};

export default VideoSection;
