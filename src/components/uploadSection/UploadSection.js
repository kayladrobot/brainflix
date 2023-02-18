import React from 'react'
import testImg from '../../assets/images/Mohan-muruge.jpg'
import uploadIcon from '../../assets/icons/upload.svg'
import './UploadSection.scss'

function UploadSection() {
  return (
    <div className="upload__section">
        <h1 className="upload__header">Upload Video</h1>
        <h3>Video thumbnail</h3>
        <img 
            src={testImg} 
            alt="mohan murage"
            className="upload__img"
        />
        <form className="upload__form">
            <div className="upload__input">
                <label>Title your Video</label>
                <input name="comment" placeholder="Add a title to your video" type="text"></input>
            </div>
            <div className="upload__input">
                <label>Add a Video Description</label>
                <input name="comment" placeholder="Add a description to your video" type="text"></input>
            </div>
            <button className="btn">
                <img 
                    src={uploadIcon}
                    alt="upload icon"
                    className="upload__icon"/>
                Publish
            </button>
        </form>
        <h2>Cancel</h2>
    </div>
  )
}

export default UploadSection