import "../comments/Comments.scss";
import Comment from "../comment/Comment";
import CommentImg from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/icons/add_comment.svg";

function Comments({ currentVideo }) {
  return (
    <div className="comments">
      <h2>{currentVideo.comments.length} Comments</h2>
      <div className="comments__formContainer">
        <img
          src={CommentImg}
          alt="profile of commenter"
          className="comments__profileImg"
        />
        <form className="comments__form">
          <label className="comments__header">
            <h2>Join the Conversation</h2>
          </label>
          <div className="comments__inputContainer">
            <input
              className="comments__input"
              placeholder="Add a new comment"
              type="text"
              name="comment"
            ></input>
            <button className="btn comments__btn">
              <img
                src={CommentIcon}
                alt="comment icon"
                className="comments__icon"
              />
              Comment
            </button>
          </div>
        </form>
      </div>
      {currentVideo.comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment.comment}
          name={comment.name}
          timestamp={comment.timestamp}
        />
      ))}
    </div>
  );
}

export default Comments;

// <div className="comment">
//             <div className="comments__commentImg">
//                 <img
//                 src=""
//                 alt=""
//                 className="comment__img"/>
//             </div>
//             <div className="comment__copy">
//                 <div className="comment__nameDate">
//                     <h4>{currentVideo.comments}</h4>
//                     <h4>{currentVideo.comments}</h4>
//                 </div>
//             </div>
//             <p className="comment__text">{currentVideo.comments}</p>
//         </div>
