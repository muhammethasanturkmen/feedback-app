"use client"

import { useState } from "react";
import Progress from "./feedback-situation/in-progress";
import Live from "./feedback-situation/live";
import Planned from "./feedback-situation/planned";
import RoadmapHeader from "./roadmap-header";
import "./roadmap-page.css";

export default function RoadmapPage() {
  const [situation, setSituation] = useState("progress");

  return (
    <>
      <>
      {window.innerWidth < 768 ?    
        <div className="road-map-container">
          <RoadmapHeader />

          <div className="navigation">
            <button onClick={() => setSituation("planned")} className={situation === "planned" ? "active" : "" }>Planned <span>2</span></button>
            <button onClick={() => setSituation("progress")} className={situation === "progress" ? "active" : "" }>In-Progress <span>3</span></button>
            <button onClick={() => setSituation("live")} className={situation === "live" ? "active" : "" }>Live <span>1</span></button>
          </div>
          
          {situation === "progress" ? <Progress /> : "" }
          {situation === "planned" ? <Planned /> : "" }
          {situation === "live" ? <Live /> : "" }
        </div>
        :
        <div className="road-map-container">
          <RoadmapHeader />
          
          <div className="situations">
            <Progress />
            <Planned />
            <Live />
          </div>
        </div>
      }
      </>
    </>
  )
}