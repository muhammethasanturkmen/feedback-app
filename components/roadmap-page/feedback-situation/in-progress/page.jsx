import { Comments, UpVote } from "@/helpers/icons";
import "./progress.css";

export default function Progress() {
  return (
    <div className="in-progress">
      <div className="in-progress-texts">
        <h3>In-Progress <span>3</span></h3>
        <p>Currently being developed</p>
      </div>

      <div className="card-lists">
        <div className="card">
          <div className="status">
            <p><span>●</span>In Progress</p>
          </div>

          <div className="card-texts">
              <h4>One-click portfolio generation</h4>
              <p>Add ability to create professional looking portfolio from profile.</p>
          </div>

          <p className="card-category">Feature</p>

          <div className="like-and-comments">
              <div className="likes">
                  <UpVote />
                  <p>62</p>
              </div>

              <div className="comments">
                  <Comments />
                  <p>1</p>
              </div>
          </div>
        </div>

        <div className="card">
          <div className="status">
            <p><span>●</span>In Progress</p>
          </div>

          <div className="card-texts">
              <h4>Bookmark challenges</h4>
              <p>Be able to bookmark challenges to take later on.</p>
          </div>

          <p className="card-category">Feature</p>

          <div className="like-and-comments">
              <div className="likes">
                  <UpVote />
                  <p>31</p>
              </div>

              <div className="comments">
                  <Comments />
                  <p>1</p>
              </div>
          </div>
        </div>

        <div className="card">
          <div className="status">
            <p><span>●</span>In Progress</p>
          </div>

          <div className="card-texts">
              <h4>Animated solution screenshots</h4>
              <p>Screenshots of solutions with animations don’t display content.</p>
          </div>

          <p className="card-category">Bug</p>

          <div className="like-and-comments">
              <div className="likes">
                  <UpVote />
                  <p>9</p>
              </div>

              <div className="comments">
                  <Comments />
                  <p>0</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}