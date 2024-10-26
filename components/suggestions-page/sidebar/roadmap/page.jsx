export default function Roadmap() {
    return (
        <div className="roadmap">
            <div className="roadmap-title">
                <h3>Roadmap</h3>
                <a href="#">view</a>
            </div>

            <ul className="roadmap-list">
                <li className="planned">
                    <span>●</span>
                    <p>Planned</p>
                    <span>2</span>
                </li>

                <li className="in-progress">
                    <span>●</span>
                    <p>In-Progress</p>
                    <span>3</span>
                </li>

                <li className="live">
                    <span>●</span>
                    <p>Live</p>
                    <span>1</span>
                </li>
            </ul>
        </div>
    )
}