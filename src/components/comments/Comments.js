import "../comments/Comments.scss";
import Comment from "../comment/Comment";
import CommentImg from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/icons/add_comment.svg";
import React, { useState, useRef} from "react";
import { API_KEY, BASE_URL } from "../../init";
import axios from "axios";

function Comments({ currentVideo, videoId, displayDate}) {
  const formEl = useRef(null); // create a reference to the form element

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}videos/${videoId}/comments?api_key=${API_KEY}`, 
      { 
        comment: comment,
        name: comment
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
      )
      .then((response) => {
        setComments([...comments, response.data]);
        setComment("");
        console.log("Success!")
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

  return (
    <div className="comments">
      <h2>{currentVideo.comments.length} Comments</h2>
      <div className="comments__formContainer">
        <img
          src={CommentImg}
          alt="profile of commenter"
          className="comments__profileImg"
        />
        <form 
        ref={formEl} // assign the form reference to the form element
        onSubmit={handleSubmit}
        className="comments__form">
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
            <button 
            type="submit"
            className="btn comments__btn">
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
          comment={comment.comment}
          name={comment.name}
          timestamp={comment.timestamp}
          displayDate={displayDate}
        />
      ))}
    </div>
  );
}

export default Comments;
