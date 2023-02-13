import "./Comment.scss";

function comment({ timestamp, name, comment }) {
  const date = new Date(timestamp);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const year = date.getFullYear();
  const dateString = `${month}/${day}/${year}`;

  return (
    <div className="comment">
      <div className="comment__imgContainer"></div>
      <div className="comment__copy">
        <div className="comment__nameDate">
          <h2 className="comment__name">{name}</h2>
          <h3 className="comment__date">{dateString}</h3>
        </div>
        <p className="comment_text">{comment}</p>
      </div>
    </div>
  );
}

export default comment;
