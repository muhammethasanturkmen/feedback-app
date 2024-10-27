"use client";

import { useState, useEffect } from "react";
import Progress from "./feedback-situation/in-progress";
import Live from "./feedback-situation/live";
import Planned from "./feedback-situation/planned";
import RoadmapHeader from "./roadmap-header";
import "./roadmap-page.css";

export default function RoadmapPage() {
  const [situation, setSituation] = useState("progress");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ?    
        <div className="road-map-container">
          <RoadmapHeader />

          <div className="navigation">
            <button onClick={() => setSituation("planned")} className={situation === "planned" ? "active" : "" }>
              Planned <span>2</span>
            </button>
            <button onClick={() => setSituation("progress")} className={situation === "progress" ? "active" : "" }>
              In-Progress <span>3</span>
            </button>
            <button onClick={() => setSituation("live")} className={situation === "live" ? "active" : "" }>
              Live <span>1</span>
            </button>
          </div>
          
          {situation === "progress" && <Progress />}
          {situation === "planned" && <Planned />}
          {situation === "live" && <Live />}
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
  );
}