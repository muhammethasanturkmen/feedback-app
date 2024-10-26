import AddFeedbackButton from "./add-feedback-button/page";
import SuggestionsCounter from "./suggestions-counter/page";
import SortBy from "./sort-by/page";
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