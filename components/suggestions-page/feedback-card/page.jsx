import { Comments, UpVote } from "@/helpers/icons";
import "./feedback-card.css";

export default function Card() {
    return (
        <div className="card">
            <div className="card-texts">
                <h4>Add tags for solutions</h4>
                <p>Easier to search for solutions based on a specific stack.</p>
            </div>

            <p className="card-category">Enhancement</p>

            <div className="like-and-comments">
                <div className="likes">
                    <UpVote />
                    <p>112</p>
                </div>

                <div className="comments">
                    <Comments />
                    <p>2</p>
                </div>
            </div>
        </div>
    )
}