import Video from '../video/Video';
import './VideoList.scss';
import eyeIcon from '../../assets/icons/views.svg';
import likeIcon from '../../assets/icons/likes.svg';

const videoData = [
{
    title: "Become A Travel Pro In One Easy Lesson",
    by: "Todd Welch",
    comment: "This is a comment",
    id: 1,
    src: "https://example.com/video1.mp4",
    timestamp: "11/02/23",
    seen: 345,
    likes: 123,
    description: "This is the description",
    img: "",
    comments: [{
        name: "John",
        time: "11/02/22",
        comment: "Lorem Ipsum"
    },{
        name: "John",
        time: "11/02/22",
        comment: "Lorem Ipsum"
    },{
        name: "John",
        time: "11/02/22",
        comment: "Lorem Ipsum"
    }]
},
{
    title: "Les Houches The Hidden Gem of The Chamonix",
    by: "Cornelia Blair",
    comment: "This is a comment 2",
    id: 2,
    src: "https://example.com/video2.mp4",
    timestamp: "11/02/23",
    seen: 34566,
    likes: 1223,
    description: "This is the description",
    img: ""
    }
];

const VideoInfo = ({videoData}) => {
    return (
        <>
            <h4>{videoData.name}</h4>
            <div className="video__infoContainer">
                <h2 className="video__title">{videoData.title}</h2>
                <div className="video__info">
                    <div className="video__author">
                        <h4>By {videoData.by}</h4>
                        <p>{videoData.timestamp}</p>
                    </div>
                    <div className="video__engagement">
                        <div className="video__view">
                            <img 
                            className="video__viewIcon" 
                            src={eyeIcon} 
                            alt ="eye icon" />
                            <p>{videoData.seen}</p>
                        </div>
                        <div class="video__likes">
                            <img 
                            src={likeIcon}
                            className="video__likesIcon"
                            alt="likes icon"/>
                            <p>{videoData.likes}</p>
                        </div>
                    </div>
                </div>
                <p className="video__description">{videoData.description}</p>
                <div className="video__comments">
                    <h3>{videoData.comments.forEach(num => {
                    let commentNum = 0;
                    num += commentNum;

                    return commentNum;
                    })}
                    comments</h3>
                </div>
            </div>
        </>
    )
}

// Main Video Player Component
const MainVideoPlayer = ({videoData}) => {
    return (
    <div>
      <video 
        src={videoData.src} 
        controls
        className="video__main"/>
    </div>
    );
  }
  
// Video List Component
const VideoList = (props) => {
    return (
        <div className="video__list">
            <h3>Next Videos</h3>
        {
            videoData.map(data => {
                return <Video 
                    key={data.id}
                    title={data.title}
                    by={data.by}
                    img={data.img}
                />
            })
        }
        </div>
    )
}

const Videos = (props) => {
    return (
        <div>
            <MainVideoPlayer videoData={videoData[0]} title={videoData[0]["title"]} />
            <div className="main">
                <VideoInfo videoData={videoData[0]}/>
                <VideoList />
            </div>
        </div>
    )
}

export default Videos;