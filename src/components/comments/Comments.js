import React, { useState, useRef } from "react";
import { PORT } from "../../const";
import axios from "axios";
import Comment from "../comment/Comment";
import CommentImg from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/icons/add_comment.svg";
import "../comments/Comments.scss";

function Comments({ currentVideo, videoId, displayDate, setCurrentVideo }) {
  const formEl = useRef(null);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      comment: comment,
      name: "Guest"
    };

    const jsonData = JSON.stringify(newComment);

    axios
      .post(
        `${PORT}videos/${videoId}/comments`,
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const updatedVideoData = {
          ...currentVideo,
          comments: [...currentVideo.comments, response.data],
        };
        setCurrentVideo(updatedVideoData);
        setComment("");
        formEl.current.reset();
      })
      .catch((error) => console.log(error));
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  if (!currentVideo) {
    return <div>Loading...</div>;
  }

  if (!currentVideo || !currentVideo.comments) {
    return <div>Loading...</div>;
  }

  return (
    <div className="comments">
      <h2>{currentVideo.comments.length} Comments</h2>
      <div className="comments__formContainer">
        <img
          src={CommentImg}
          alt="profile of commenter"
          className="comments__profileImg"
        />
        <form ref={formEl} onSubmit={handleSubmit} className="comments__form">
          <label className="comments__header">
            <h2>Join the Conversation</h2>
          </label>
          <div className="comments__inputContainer">
            <input
              onChange={handleCommentChange}
              className="comments__input"
              placeholder="Add a new comment"
              type="text"
              name="comment"
            ></input>
            <button type="submit" className="btn comments__btn">
              <img
                src={CommentIcon}
                alt="comment icon"
                className="comments__icon upload__icon"
              />
              Comment
            </button>
          </div>
        </form>
      </div>
      {currentVideo.comments &&
        currentVideo.comments.map((comment) => (
          <Comment
            key={comment.id}
            commentName={comment.comment}
            name={comment.name}
            timestamp={comment.timestamp}
            displayDate={displayDate}
            videoId={videoId}
            currentVideo={currentVideo}
            commentId={comment.id}
          />
        ))}
    </div>
  );
}

export default Comments;