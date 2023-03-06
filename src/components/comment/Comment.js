import "./Comment.scss";
import deleteIcon from "../../assets/icons/icon-delete.svg"


function Comment({ timestamp, name, commentName, displayDate, handleDeleteComment, commentId}) {
    
  const handleDeleteClick = () => {
    handleDeleteComment(commentId);
  };

  return (
    <div className="comment">
      <div className="comment__imgContainer"></div>
      <div className="comment__copy">
        <div className="comment__nameDate">
          <h2 className="comment__name">{name}</h2>
          <h3 className="comment__date">{displayDate(timestamp)}</h3>
        </div>
        <p className="comment_text">{commentName}</p>
        <div className="comment__icons">
           <img 
          src={deleteIcon}
          alt="delete icon"
          className="comment__deleteIcon"
          onClick={handleDeleteClick}
          />
        </div>
      </div>
    </div>
  );
}

  
  export default Comment;
  