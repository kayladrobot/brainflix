import "./MainVideo.scss";


function MainVideo({ currentVideo, videoId}) {

  const video = currentVideo.find(video => video.id === videoId);


  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={currentVideo.image} alt="test" className="video__main"></img>
    </div>
  );
}

export default MainVideo;
