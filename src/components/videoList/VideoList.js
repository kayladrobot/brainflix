import Video from "../video/Video";
import "./VideoList.scss";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../../init";
import axios from "axios";

function VideoList({activeVideoId}) {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
      axios
        .get(`${BASE_URL}videos?api_key=${API_KEY}`)
        .then((response) => {
          setVideoData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  }, []);

  return (
    <section className="video__list">
      <h3 className="video__mainHeader">Next Videos</h3>
      {videoData
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
