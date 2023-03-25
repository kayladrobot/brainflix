import testImg from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import "./UploadSection.scss";

function UploadSection({handleUpload}) {
  
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
