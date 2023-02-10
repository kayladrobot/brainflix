import './MainVideoInfo'
import './MainVideoInfo.scss'
import eyeIcon from '../../assets/icons/views.svg';
import likeIcon from '../../assets/icons/likes.svg';

function MainVideoInfo({currentVideo}) {
    console.log(currentVideo.title)

    const date = new Date(currentVideo.timestamp);
    const dateString = date.toLocaleDateString();
    
  return (
    <div>
        <div className="video__infoContainer">
            <h1 className="video__title">{currentVideo.title}</h1>
            <div className="video__info">
                <div className="video__author">
                    <h2>By {currentVideo.title}</h2>
                    <h4 className="video__date">{dateString}</h4>
                </div>
                <div className="video__engagement">
                    <div className="video__view">
                        <img 
                        className="video__viewIcon" 
                        src={eyeIcon} 
                        alt ="eye icon" 
                        />
                        <h4>{currentVideo.views}</h4>
                    </div>
                    <div class="video__likes">
                        <img 
                        src={likeIcon}
                        className="video__likesIcon"
                        alt="likes icon"/>
                        <h4>{currentVideo.likes}</h4>
                    </div>
                </div>
            </div>
            <p className="video__description">{currentVideo.description}</p>
        </div>
    </div>
  )
}

export default MainVideoInfo;
