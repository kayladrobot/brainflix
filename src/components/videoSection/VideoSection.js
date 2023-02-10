import './VideoSection.scss'
import VideoList from "../videoList/VideoList";
import MainVideo from '../mainVideo/MainVideo'
import MainVideoInfo from '../mainVideoInfo/MainVideoInfo'
import videoDetails from '../../data/video-details.json'
import Comments from '../comments/Comments'
import React, { useState } from "react";
// import VideoInfo from "../videoData/videoData";
const  VideoSection = () => {
    const [videoData, setVideoData] = useState(videoDetails);
    const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

const changeVideo = (id) => {
  const selectedVideo = videoData.find((video) => { 
    return video.id === id;
  });

  setCurrentVideo(selectedVideo);
}

const addVideo = () => {
    const newVideo = {

    };
    const newVideoData = [...videoData, newVideo];
    setVideoData(newVideoData);
  };

  return (
    <div>
      <MainVideo  currentVideo={currentVideo}/>
      <div className="video__section">
        <div>
          <MainVideoInfo currentVideo={currentVideo} videoData={videoData}/>
          <Comments currentVideo={currentVideo}/>
        </div>
          <VideoList changeVideo={changeVideo} videoData={videoData} activeCardId={currentVideo.id} addVideo={addVideo}/>
        </div>
    </div>
  );
}

export default VideoSection;

