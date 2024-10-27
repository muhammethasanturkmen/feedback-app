import "./add-comment.css";

export default function AddComment() {
  return (
    <div className="add-comment">
        <h4>Add Comment</h4>
        <textarea placeholder="Type your comment here"></textarea>

        <div className="add-comment-footer">
            <p className="char-left">250 Characters left</p>
            <button className="post-button">Post Comment</button>
           
        </div>
    </div>
  )
}