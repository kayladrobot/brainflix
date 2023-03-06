import MainVideo from "../mainVideo/MainVideo";
import MainVideoInfo from "../mainVideoInfo/MainVideoInfo";
// import React, {useEffect } from "react";
// import axios from "axios";
// import { API_KEY, BASE_URL } from "../../init";

function VideoDetails({currentVideo, videoData, setCurrentVideo, videoId}) {

    // useEffect(() => {
    //     if (videoId) {
    //         axios.get(`${BASE_URL}/videos/${videoId}?api_key=${API_KEY}`)
    //           .then((response) => {
    //             setCurrentVideo(response.data);
    //           })
    //           .catch((error) => {
    //             console.error(error);
    //           });
    //       }
    //   }, [videoId]);


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