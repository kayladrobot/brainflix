import "./MainVideo.scss";

function MainVideo({ currentVideo }) {
  const video = currentVideo ? currentVideo : null;

  return (
    <div>
      {video && (
        <img src={currentVideo.image} alt="Default" className="video__main" />
      )}
    </div>
  );
}

export default MainVideo;
