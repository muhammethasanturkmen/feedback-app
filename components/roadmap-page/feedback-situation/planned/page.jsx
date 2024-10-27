import { Comments, UpVote } from "@/helpers/icons";
import "./planned.css";

export default function Planned() {
  return (
    <div className="planned">
      <div className="planned-texts">
        <h3>Planned <span>2</span></h3>
        <p>Ideas prioritized for research</p>
      </div>

      <div className="card-lists">
        <div className="card">
          <div className="status">
            <p><span>●</span>Planned</p>
          </div>

          <div className="card-texts">
              <h4>More comprehensive reports</h4>
              <p>It would be great to see a more detailed breakdown of solutions.</p>
          </div>

          <p className="card-category">Feature</p>

          <div className="like-and-comments">
              <div className="likes">
                  <UpVote />
                  <p>123</p>
              </div>

              <div className="comments">
                  <Comments />
                  <p>2</p>
              </div>
          </div>
        </div>

        <div className="card">
          <div className="status">
            <p><span>●</span>Planned</p>
          </div>

          <div className="card-texts">
              <h4>Learning paths</h4>
              <p>Sequenced projects for different goals to help people improve.</p>
          </div>

          <p className="card-category">Feature</p>

          <div className="like-and-comments">
              <div className="likes">
                  <UpVote />
                  <p>28</p>
              </div>

              <div className="comments">
                  <Comments />
                  <p>1</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}