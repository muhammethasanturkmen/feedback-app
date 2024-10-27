import Card from "../suggestions-page/feedback-card";
import AddComment from "./add-comment";
import CommentsList from "./comments";
import DetailsHeader from "./details-header";
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