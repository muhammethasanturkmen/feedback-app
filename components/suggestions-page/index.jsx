import Header from "../header";
import EmptyContainer from "./empty";
import CardLists from "./feedback-card-lists";
import Sidebar from "./sidebar";
import "./suggestions-page.css";

export default function MainPage() {
    return (
        <div className="container">
            <Sidebar />
            <Header />
            <EmptyContainer />
            <CardLists />
        </div>
    )
}