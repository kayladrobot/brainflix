import "./VideoSection.scss";
import VideoList from "../videoList/VideoList";
import MainVideo from "../mainVideo/MainVideo";
import MainVideoInfo from "../mainVideoInfo/MainVideoInfo";
import Comments from "../comments/Comments";
import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../../init";
import axios from "axios";
import { useParams } from "react-router-dom";

const VideoSection = () => {
  const [videoData, setVideoData] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}videos?api_key=${API_KEY}`);
        setVideoData(response.data);
        setCurrentVideoId(response.data[0].id);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCurrentVideo = async () => {
      try {
        const response = await axios.get(`${BASE_URL}videos/${currentVideoId}?api_key=${API_KEY}`);
        setCurrentVideo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (!currentVideoId) {
      fetchVideoData();
    } else {
      fetchCurrentVideo();
    }
  }, [currentVideoId]);

  const changeActiveVideo = (videoId) => {
    setCurrentVideoId(videoId);
  };

  const removeVideoFromList = (videoId) => {
    setVideoData(videoData.filter((video) => video.id !== videoId));
  };


  return (
    <div>
      <MainVideo currentVideo={currentVideo} videoId={currentVideoId} />
      <div className="video__section">
        <div>
          <MainVideoInfo currentVideo={currentVideo} videoId={currentVideoId} />
          <Comments currentVideo={currentVideo} videoId={currentVideoId} />
        </div>
        {videoData.length > 0 && (
          <VideoList
            videoData={videoData}
            activeVideoId={currentVideoId}
            changeActiveVideo={changeActiveVideo}
            removeVideoFromList={removeVideoFromList}
          />
        )}
      </div>
    </div>
  );
};

export default VideoSection;
