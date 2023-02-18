import './App.scss';
import Header from "./components/header/Header";
import VideoSection from './components/videoSection/VideoSection'
import VideoUpload from './pages/page/VideoUpload.js'
import UploadSection from './components/uploadSection/UploadSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <VideoSection />
      <UploadSection />
        <Routes>
          <Route exact path="/" component={VideoSection} />
          <Route path="/upload" component={VideoUpload} />
        </Routes>
    </BrowserRouter>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <VideoSection />
//     </div>
//   );
// }

export default App;
