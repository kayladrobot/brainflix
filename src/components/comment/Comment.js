import './Comment.scss'

function comment({timestamp, name, key, comment}) {
    const date = new Date(timestamp);
    const dateString = date.toLocaleDateString();
  return (
    <div className="comment">
         <div className="comment__imgContainer">
        </div>
        <div className="comment__copy">
            <div className="comment__nameDate">
                <h2 className="comment__name">{name}</h2>
                <h2 className="comment__date">{dateString}</h2>
            </div>
            <p className="comment_text">{comment}</p>
        </div>
    </div>
  )
}

export default comment