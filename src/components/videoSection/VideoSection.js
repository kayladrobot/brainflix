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
  const displayDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  const [currentVideo, setCurrentVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    axios
        .get(`${BASE_URL}videos/${videoId}?api_key=${API_KEY}`)
        .then((response) => {
          setCurrentVideo(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  }, [videoId]);

  return (
    <div>
      <MainVideo currentVideo={currentVideo} videoId={videoId} />
      <div className="video__section">
        <div>
          <MainVideoInfo currentVideo={currentVideo} videoId={videoId} displayDate={displayDate}/>
          <Comments currentVideo={currentVideo} videoId={videoId} displayDate={displayDate}/>
        </div>
          <VideoList
            activeVideoId={videoId}
          />
      </div>
    </div>
  );
};

export default VideoSection;
