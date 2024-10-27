import AddFeedbackButton from "./add-feedback-button";
import SuggestionsCounter from "./suggestions-counter";
import SortBy from "./sort-by";
import "./header.css";

export default function Header() {
    return (
        <header className="header">
            <SuggestionsCounter />
            <SortBy />
            <AddFeedbackButton />
        </header>
    )
}