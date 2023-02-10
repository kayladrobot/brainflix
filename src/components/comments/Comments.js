import '../comments/Comments.scss'
import Comment from '../comment/Comment'
import CommentImg from '../../assets/images/Mohan-muruge.jpg'
import CommentIcon from '../../assets/icons/add_comment.svg';

function Comments({currentVideo}) {
  return (
    <div className="comments">
        <h3>{currentVideo.comments.length} Comments</h3>
        <div className="comments__formContainer">
            <img
                src={CommentImg}
                alt="profile of commenter"
                className="comments__profileImg"/>
            <form className="comments__form">
                <label className="comments__header"><h4>Join the Conversation</h4></label>
                <textarea className="comments__input"placeholder="Add a new comment" type="text" name="comment"></textarea>
                <button className="btn comments__btn">
                    <img
                    src={CommentIcon}
                    alt="comment icon"
                    className="comments__icon"
                    />
                Comment</button>
            </form>
        </div>
        {currentVideo.comments.map(comment => (
        <Comment key={comment.id} comment={comment.comment} name={comment.name} timestamp={comment.timestamp} />
         ))}
    </div>
  )
}

export default Comments

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