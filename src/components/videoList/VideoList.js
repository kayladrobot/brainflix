import Video from '../video/Video';
import './VideoList.scss';

function VideoList({videoData, activeVideo, changeVideo}) {

  return (
    <section className="video__list">
      <h4>Next Videos</h4>
      {videoData
        .filter((video) => {
          return video.id !== activeVideo;
        })
        .map((video) => (
          <Video
            key={video.id}
            id={video.id}
            changeVideo={changeVideo}
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

// const videoData = [
// {
//     title: "Become A Travel Pro In One Easy Lesson",
//     by: "Todd Welch",
//     comment: "This is a comment",
//     id: 1,
//     src: "https://example.com/video1.mp4",
//     timestamp: "11/02/23",
//     seen: 345,
//     likes: 123,
//     description: "This is the description",
//     img: "",
//     comments: [{
//         name: "John",
//         time: "11/02/22",
//         comment: "Lorem Ipsum"
//     },{
//         name: "John",
//         time: "11/02/22",
//         comment: "Lorem Ipsum"
//     },{
//         name: "John",
//         time: "11/02/22",
//         comment: "Lorem Ipsum"
//     }]
// },
// {
//     title: "Les Houches The Hidden Gem of The Chamonix",
//     by: "Cornelia Blair",
//     comment: "This is a comment 2",
//     id: 2,
//     src: "https://example.com/video2.mp4",
//     timestamp: "11/02/23",
//     seen: 34566,
//     likes: 1223,
//     description: "This is the description",
//     img: ""
//     }
// ];

// 
// // // Main Video Player Component
// // const MainVideoPlayer = ({videoData}) => {
// //     return (
// //     <div>
// //       <video 
// //         src={videoData.src} 
// //         controls
// //         className="video__main"/>
// //     </div>
// //     );
// //   }
  
// // Video List Component
// const VideoList = (props) => {
//     return (
//         <div className="video__list">
//             <h3>Next Videos</h3>
//         {
//             videoData.map(data => {
//                 return <Video 
//                     key={data.id}
//                     title={data.title}
//                     by={data.by}
//                     img={data.img}
//                 />
//             })
//         }
//         </div>
//     )
// }

// const Videos = (props) => {
//     return (
//         <div>
//             {/* <MainVideoPlayer videoData={videoData[0]} title={videoData[0]["title"]} /> */}
//             <div className="main">
//                 <VideoInfo videoData={videoData[0]}/>
//                 <VideoList />
//             </div>
//         </div>
//     )
// }

// export default Videos;