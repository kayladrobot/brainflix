import "./MainVideo.scss";

function MainVideo({ currentVideo }) {
  return (
    <video poster={currentVideo.image} className="video__main" controls></video>
  );
}

export default MainVideo;
