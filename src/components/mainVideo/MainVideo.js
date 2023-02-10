import "./MainVideo.scss";

function MainVideo({currentVideo}) {

  console.log(currentVideo)

    return (
        <div>
        <video 
          src={currentVideo.image} 
          controls
          className="video__main"/>
      </div>
    )
  }
  
  export default MainVideo;