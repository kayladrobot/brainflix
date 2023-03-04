import "./App.scss";
import Header from "./components/header/Header";
import VideoSection from "./components/videoSection/VideoSection";
import UploadSection from "./components/uploadSection/UploadSection";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Paulo instructed this was a viable way to do this*/}
        <Route path="/" element={<Navigate to={"/videos/84e96018-4022-434e-80bf-000ce4cd12b8"} />} />
        <Route
          path="/videos/:videoId"
          element={<VideoSection />}
        />
        <Route path="/upload" element={<UploadSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
