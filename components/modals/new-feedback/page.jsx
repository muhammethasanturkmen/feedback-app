import { Plus } from "@/helpers/icons";
import "./new-feedback.css";

export default function NewFeedbackForm() {
    return (
        <div className="new-feedback">
            <button className="back-button">Go Back</button>

            <form>
                <div className="circle">
                    <Plus />
                </div>

                <h1>Create New Feedback</h1>

                <div className="form-item">
                    <label htmlFor="title">Feedback Title</label>
                    <p>Add a short, descriptive headline</p>
                    <input type="text" name="title" id="title"/>
                </div>

                <div className="form-item">
                    <label htmlFor="category">Category</label>
                    <p>Choose a category for your feedback</p>
                    <select name="category" id="category">
                        <option value="ui">UI</option>
                        <option value="ux">UX</option>
                        <option value="enhancement">Enhancement</option>
                        <option value="bug">Bug</option>
                        <option value="feature">Feature</option>
                    </select>
                </div>

                <div className="form-item">
                    <label htmlFor="title">Feedback Detail</label>
                    <p>Include any specific comments on what should be improved, added, etc.</p>
                    <input type="text" name="title" id="title"/>
                </div>

                <div className="form-buttons">
                    <button className="add-new">Add Feedback</button>
                    <button className="cancel">Cancel</button>
                </div>
            </form>
        </div>
    )
}