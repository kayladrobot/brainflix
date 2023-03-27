import "./Comment.scss";


function Comment({ timestamp, name, commentName, displayDate, handleDeleteComment, commentId}) {
    
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
        </div>
      </div>
    </div>
  );
}

  
  export default Comment;
  