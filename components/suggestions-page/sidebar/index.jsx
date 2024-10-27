"use client";

import { useState, useEffect } from "react";
import { GoBack, Menu } from "@/helpers/icons";
import Roadmap from "./roadmap";
import Categories from "./filter";
import "./sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
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
        <div className="sidebar">
          <div className="texts">
            <h3>Frontend Mentor</h3>
            <p>Feedback Board</p>
          </div>

          <div className="modal-buttons">
            {open ? (
              <button onClick={() => setOpen(false)}><GoBack /></button>
            ) : (
              <button onClick={() => setOpen(true)}><Menu /></button>
            )}
          </div>

          <div className={open ? "dialog active" : "dialog"} style={{ width: open ? "100%" : "0%" }}>
            <div className="dialog-content">
              <Categories />
              <Roadmap />
            </div>
          </div>
        </div>
        :
        <div className="sidebar-tablet">
          <div className="texts">
            <h3>Frontend Mentor</h3>
            <p>Feedback Board</p>
          </div>

          <Categories />
          <Roadmap />
        </div>
      }
    </>
  );
}