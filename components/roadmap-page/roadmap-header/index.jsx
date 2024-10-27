import AddFeedbackButton from "@/components/header/add-feedback-button"
import "./roadmap-header.css";

export default function RoadmapHeader() {
  return (
    <div className="roadmapheader">
      <div className="header-navigation">
        <button>Go Back</button>
        <h3 className="header-h3">Roadmap</h3>
      </div>

      <AddFeedbackButton />
    </div>
  )
}