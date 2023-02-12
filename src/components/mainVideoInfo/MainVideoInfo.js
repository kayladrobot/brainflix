import './MainVideoInfo'
import './MainVideoInfo.scss'
import eyeIcon from '../../assets/icons/views.svg';
import likeIcon from '../../assets/icons/likes.svg';

function MainVideoInfo({currentVideo}) {
    console.log(currentVideo.title)
    console.log(currentVideo)

    const date = new Date(currentVideo.timestamp);
    const dateString = date.toLocaleDateString();
    
  return (
    <div>
        <div className="video__infoContainer">
            <h1 className="video__title">{currentVideo.title}</h1>
            <div className="video__info">
                <div className="video__author">
                    <h2>By {currentVideo.channel}</h2>
                    <h2 className="video__date">{dateString}</h2>
                </div>
                <div className="video__engagement">
                    <div className="video__view">
                        <img 
                        className="video__viewIcon" 
                        src={eyeIcon} 
                        alt ="eye icon" 
                        />
                        <h2>{currentVideo.views}</h2>
                    </div>
                    <div class="video__likes">
                        <img 
                        src={likeIcon}
                        className="video__likesIcon"
                        alt="likes icon"/>
                        <h2>{currentVideo.likes}</h2>
                    </div>
                </div>
            </div>
            <p className="video__description">{currentVideo.description}</p>
        </div>
    </div>
  )
}

export default MainVideoInfo;
