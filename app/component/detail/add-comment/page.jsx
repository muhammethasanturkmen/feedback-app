import "@/app/component/detail/add-comment/add-comment.css"
export default function Comment() {
  return (
      <div className="comment">
        <div className="first-comment">
          <img src="/user.png" width={40} height={40} alt="" />
          <div className="user-content">
            <div className="user-title">
              <div className="user-header">
                <strong className="c-name">Elijah Moss</strong>
                <p className="c-mail">@hexagon.bestagon</p>
              </div>
              <button className="c-btn">Reply</button>
            </div>
            <p>
              Also, please allow styles to be applied based on system preferences.
              I would love to be able to browse Frontend Mentor in the evening after
              my device’s dark mode turns on without the bright background it currently has.
            </p>
          </div>
        </div>
      </div>
  )
}
