import { Comments, UpVote } from "@/helpers/icons";
import "./live.css";

export default function Live() {
  return (
    <div className="live">
      <div className="live-texts">
        <h3>Live <span>1</span></h3>
        <p>Released features</p>
      </div>

      <div className="card-lists">
        <div className="card">
          <div className="status">
            <p><span>●</span>Live</p>
          </div>

          <div className="card-texts">
              <h4>Add micro-interactions</h4>
              <p>Small animations at specific points can add delight.</p>
          </div>

          <p className="card-category">Enhancement</p>

          <div className="like-and-comments">
              <div className="likes">
                  <UpVote />
                  <p>71</p>
              </div>

              <div className="comments">
                  <Comments />
                  <p>2</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}