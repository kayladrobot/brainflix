import Video from '../video/Video';
import './VideoList.scss';

function VideoList({videoInfo, activeVideoId, changeActiveVideo}) {
  return (
    <section className="video__list">
      <h3 className="video__mainHeader">Next Videos</h3>
      {videoInfo
        .filter((video) => {
          return video.id !== activeVideoId;
        })
        .map((video) => (
          <Video
            key={video.id}
            id={video.id}
            changeActiveVideo={changeActiveVideo}
            title={video.title}
            channel={video.channel}
            src={video.image}
            alt={video.title}
          />
        ))}
    </section>
  );
}

export default VideoList;
