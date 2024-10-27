"use client"

export default function AddFeedbackButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <form action="" className="add-feedback-button">
                <button onClick={() => setOpen(true)}>+ Add Feedback</button>
            </form>
            
            <div className={open ? "dialog active" : "dialog"} style={{ width: open ? "100%" : "0%" }}>
                <div className="dialog-content">
                    <p>deneme modal</p>
                </div>
            </div>
        </>
    )
}