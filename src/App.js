import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { PORT } from "./const";
import "./App.scss";
import Header from "./components/header/Header";
import VideoSection from "./components/videoSection/VideoSection";
import UploadSection from "./components/uploadSection/UploadSection";

function App() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    axios
      .get(`${PORT}videos`)
      .then((response) => {
        setVideoData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
}, []);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={"/videos/84e96018-4022-434e-80bf-000ce4cd12b8"} />
          }
        />
        <Route path="/videos/:videoId" element={<VideoSection videoData={videoData}/>} />
        <Route path="/upload" element={<UploadSection videoData={videoData} setVideoData={setVideoData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;