import "./App.scss";
import Header from "./components/header/Header";
import VideoSection from "./components/videoSection/VideoSection";
import UploadSection from "./components/uploadSection/UploadSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoSection />} />
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
