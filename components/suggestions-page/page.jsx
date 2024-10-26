import Header from "../header/page";
import Sidebar from "./sidebar/page";

export default function MainPage() {
    return (
        <div className="container">
            <Sidebar />
            <Header />
        </div>
    )
}