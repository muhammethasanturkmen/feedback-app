"use client";

import { useState } from "react";
import { GoBack, Menu } from "@/helpers/icons";
import Roadmap from "./roadmap";
import Categories from "./filter";
import "./sidebar.css"


export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="texts">
        <h3>Frontend Mentor</h3>
        <p>Feedback Board</p>
      </div>

      <div className="modal-buttons">
        {open === true ?
          <button onClick={() => setOpen(false)}><GoBack /></button>
          :
          <button onClick={() => setOpen(true)}><Menu /></button>
        }
      </div>

      <div className={open === true ? "dialog active" : "dialog"} open={open} style={{ width: open ? "100%" : "0%" }}>
        <div className="dialog-content">
          <Categories />
          <Roadmap />
        </div>
      </div>
    </div>
  )
}