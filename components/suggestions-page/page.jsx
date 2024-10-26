import Header from "../header/page";
import EmptyContainer from "./empty/page";
import CardLists from "./feedback-card-lists/page";
import Sidebar from "./sidebar/page";
import "./suggestions-page.css";

export default function MainPage() {
    return (
        <div className="container">
            <Sidebar />
            <Header />
            <CardLists />
            <EmptyContainer />
        </div>
    )
}