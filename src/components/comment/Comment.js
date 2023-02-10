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
                <h3 className="comment__name">{name}</h3>
                <h3 className="comment__date">{dateString}</h3>
            </div>
            <p className="comment_text">{comment}</p>
        </div>
    </div>
  )
}

export default comment