import "./Video.scss"

function Video({title, channel, src, alt}) {


    const clickHandler = () => {
        // changeVideo(id);
      };

  return (
    <div className="video" onClick={clickHandler}>
        <div className="video__imageContainer">
            <img 
                className="video__image" 
                src={src} 
                alt={title}>
            </img>
        </div>
        <div className="video__container">
            <h3 className="video__header">{title}</h3>
            <p>{channel}</p>
        </div>
    </div>
  )
}

export default Video

// const Video = ({currentVideo}) => {

//     // const clickHandler = () => {
//     //     changeVideo(id);
//     //   };

//     return (
//     <div className="video" onClick={clickHandler}>
//         <img 
//             className="video__image" 
//             src="" 
//             alt="">
//         </img>
//         <div className="video__container">
//             <h4 className="video__header">{}</h4>
//             <p>{by}</p>
//         </div>
//     </div>
//     )
// }

// export default Video;