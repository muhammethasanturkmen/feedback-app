import { Comments, UpVote } from "@/helpers/icons";
import "./feedback-card.css";
import LikeButton from "../feedback-like";


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
                    <LikeButton />
                </div>

                <div className="comments">
                    <Comments />
                    <p>2</p>
                </div>
            </div>
        </div>
    )
}