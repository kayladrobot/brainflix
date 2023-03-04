import "./Comment.scss";
import { API_KEY, BASE_URL } from "../../init";
import axios from "axios";

function comment({ timestamp, name, comment, displayDate}) {

  const deleteComment = (e => {
    const commentId = e.target.id;
    // send a delete request using axios to remove the commentEl
    axios
      .delete(
        `${BASE_URL}/comments/${commentId}?api_key=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="comment">
      <div className="comment__imgContainer"></div>
      <div className="comment__copy">
        <div className="comment__nameDate">
          <h2 className="comment__name">{name}</h2>
          <h3 className="comment__date">{displayDate(timestamp)}</h3>
        </div>
        <p className="comment_text">{comment}</p>
      </div>
    </div>
  );
}

export default comment;
