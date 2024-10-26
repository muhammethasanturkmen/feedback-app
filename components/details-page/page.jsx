import Card from "../suggestions-page/feedback-card/page";
import AddComment from "./add-comment/page";
import CommentsList from "./comments/page";
import DetailsHeader from "./details-header/page";
import "./details-page.css";

export default function DetailsComponent() {
    return (
        <div className="details-page">
            <DetailsHeader />
            <Card />
            <CommentsList />
            <AddComment />
        </div>
    )
}