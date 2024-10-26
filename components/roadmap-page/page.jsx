import RoadmapHeader from "./header/page";
import Progress from "./roadmap-main/in-progress/page";
import Live from "./roadmap-main/live/page";
import Planned from "./roadmap-main/planned/page";

export default function RoadmapPage() {
  return (
    <>
      <RoadmapHeader />
      <Planned />
      <Progress />
      <Live />
    </>
  )
}