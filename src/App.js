import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "./init";
import "./App.scss";
import Header from "./components/header/Header";
import VideoSection from "./components/videoSection/VideoSection";
import UploadSection from "./components/uploadSection/UploadSection";

function App() {
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

const handleUpload = (e) => {
  e.preventDefault();

  const formData = {
    title: e.target.title.value,
    description: e.target.description.value
  }

  axios.post(`${BASE_URL}videos?api_key=${API_KEY}`, formData)
  .then((response) => {
    console.log(response);
    const updatedVideoData = [...videoData, response.data];
    setVideoData(updatedVideoData);
    console.log(videoData)
    e.target.reset();
  })
  .catch((error) => console.log(error));

};


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Paulo instructed this was a viable way to do this*/}
        <Route
          path="/"
          element={
            <Navigate to={"/videos/84e96018-4022-434e-80bf-000ce4cd12b8"} />
          }
        />
        <Route path="/videos/:videoId" element={<VideoSection videoData={videoData}/>} />
        <Route path="/upload" element={<UploadSection handleUpload={handleUpload}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
