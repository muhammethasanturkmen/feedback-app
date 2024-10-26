import "@/app/component/detail/add-comment/add-comment.css"
export default function AddComment() {
  return (
    <div className="addcomment">
      <h4>Add Comment</h4>
      <textarea placeholder="Type your comment here"></textarea>
      <div className="add-footer">
        <p className="add-char">250 Characters left</p>
        <button className="post-btn">Post Comment</button>
      </div>
    </div>
  )
}