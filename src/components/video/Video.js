import "./Video.scss"

function Video({title, channel, src, alt, id, key, changeVideo, changeActiveVideo}) {


    const clickHandler = () => {
        changeActiveVideo(id);

        console.log(id)
      };

      
  return (
    <div className="video"  onClick={clickHandler}>
        <div className="video__imageContainer">
            <img 
                className="video__image" 
                src={src} 
                alt={title}>
            </img>
        </div>
        <div className="video__container">
            <h2 className="video__header">{title}</h2>
            <p>{channel}</p>
        </div>
    </div>
  )
}

export default Video
