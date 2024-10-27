import "./categoriesfilter.css";

export default function Categories() {
    return (
        <div className="categories">
            <button className="category-item">All</button>
            <button className="category-item">UI</button>
            <button className="category-item">UX</button>
            <button className="category-item">Enhancement</button>
            <button className="category-item">Bug</button>
            <button className="category-item">Feature</button>
        </div>
    )
}