import "./MainVideo.scss";

function MainVideo({currentVideo}) {

  console.log(currentVideo)

    return (
        <div>
          <img 
            alt="The current video"
            src={currentVideo.image} 
            className="video__main"
            />
      </div>
    )
  }
  
  export default MainVideo;