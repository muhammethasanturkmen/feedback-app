import "./comments.css";

export default function CommentsList() {
    return (
        <div className="comments">
            <div className="title">
                <h1><span>4 </span>Comments</h1>
            </div>

            <div className="comments-item">
                <div className="user-info">
                    <img src="image/user.png" width={40} height={40} alt="" />

                    <div className="user-texts">
                        <h4 className="name-surname">Elijah Moss</h4>
                        <h4 className="user-name">@hexagon.bestagon</h4>
                    </div>

                    <button className="reply-button">Reply</button>
                </div>

                <p>
                    Also, please allow styles to be applied based on
                    system preferences. I would love to be able to
                    browse Frontend Mentor in the evening after my
                    device’s dark mode turns on without the bright
                    background it currently has.
                </p>
            </div>

            <div className="comments-item">
                <div className="user-info">
                    <img src="image/user.png" width={40} height={40} alt="" />

                    <div className="user-texts">
                        <h4 className="name-surname">Elijah Moss</h4>
                        <h4 className="user-name">@hexagon.bestagon</h4>
                    </div>

                    <button className="reply-button">Reply</button>
                </div>

                <p>
                    Also, please allow styles to be applied based on
                    system preferences. I would love to be able to
                    browse Frontend Mentor in the evening after my
                    device’s dark mode turns on without the bright
                    background it currently has.
                </p>
            </div>

            <div className="comments-item">
                <div className="user-info">
                    <img src="image/user.png" width={40} height={40} alt="" />

                    <div className="user-texts">
                        <h4 className="name-surname">Elijah Moss</h4>
                        <h4 className="user-name">@hexagon.bestagon</h4>
                    </div>

                    <button className="reply-button">Reply</button>
                </div>

                <p>
                    Also, please allow styles to be applied based on
                    system preferences. I would love to be able to
                    browse Frontend Mentor in the evening after my
                    device’s dark mode turns on without the bright
                    background it currently has.
                </p>
            </div>

            <div className="comments-item">
                <div className="user-info">
                    <img src="image/user.png" width={40} height={40} alt="" />

                    <div className="user-texts">
                        <h4 className="name-surname">Elijah Moss</h4>
                        <h4 className="user-name">@hexagon.bestagon</h4>
                    </div>

                    <button className="reply-button">Reply</button>
                </div>

                <p>
                    Also, please allow styles to be applied based on
                    system preferences. I would love to be able to
                    browse Frontend Mentor in the evening after my
                    device’s dark mode turns on without the bright
                    background it currently has.
                </p>
            </div>
        </div>
    )
}