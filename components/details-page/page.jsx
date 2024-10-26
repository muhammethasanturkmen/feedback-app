import AddComment from "./add-comment/page";
import CommentsList from "./comments/page";

export default function DetailsPageComponents() {
    return (
        <div className="container">
            {/* feedback kartı burada olacak */}

            <CommentsList />
            <AddComment />
        </div>
    )
}