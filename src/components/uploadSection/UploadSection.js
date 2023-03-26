import axios from "axios";
import { PORT} from "../../const";
import testImg from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import "./UploadSection.scss";

function UploadSection({videoData, setVideoData}) {

  const handleUpload = (e) => {
    e.preventDefault();
  
    const formData = {
      title: e.target.title.value,
      channel: e.target.description.value
    }
  
    const jsonData = JSON.stringify(formData);
  
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post(`${PORT}videos`, jsonData)
    .then((response) => {
      console.log(response);
      const updatedVideoData = [...videoData, response.data];
      setVideoData(updatedVideoData);
      console.log(videoData)
      e.target.reset();
    })
    .catch((error) => console.log(error));
  };


  return (
    <div className="upload">
      <h1 className="upload__header">Upload Video</h1>
      <div className="upload__main">
        <div className="upload__imgContainer">
          <label>Video thumbnail</label>
          <img src={testImg} alt="mohan murage" className="upload__img" />
        </div>
        <form onSubmit={handleUpload} className="upload__form">
          <div className="upload__input">
            <label>Title your Video</label>
            <input
              className="upload__inputField inputField__title"
              name="title"
              placeholder="Add a title to your video"
              type="text"
            />
          </div>
          <div className="upload__input">
            <label>Add a Video Description</label>
            <input
              className="upload__inputField inputField__description"
              name="description"
              placeholder="Add a description to your video"
              type="text"
            />
          </div>
          <div className="upload__cta">
            <button className="btn upload__btn">
              <img src={uploadIcon} alt="upload icon" className="upload__icon" />
              Publish
            </button>
            <h2 className="upload__cancel">Cancel</h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadSection;
