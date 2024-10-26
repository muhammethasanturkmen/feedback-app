import AddFeedbackButton from "@/components/header/add-feedback-button/page";
import "./empty-container.css";

export default function EmptyContainer() {
    return (
        <div className="empty-container">
            <img src="../image/empty-image.png" alt="" />

            <div className="empty-texts">
                <h3>There is no feedback yet.</h3>
                <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            </div>

            <AddFeedbackButton />
        </div>
    )
}