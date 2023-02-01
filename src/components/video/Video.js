import "./Video.scss"

const Video = ({title, by}) => {
    return (
    <div className="video">
        <img 
            className="video__image" 
            src="" 
            alt="">
        </img>
        <div className="video__container">
            <h4 className="video__header">{title}</h4>
            <p>{by}</p>
        </div>
    </div>
    )
}

console.log(Video);

export default Video;