"use client";

import { useRef, useState } from "react";
import { GoBack, Menu } from "@/helpers/icons";
import Roadmap from "./roadmap/page";
import Categories from "./filter/page";
import "./sidebar.css"


export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  const openDialog = () => {
    setOpen(true);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeDialog = () => {
    setOpen(false);
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div className="sidebar">
      <div className="texts">
        <h3>Frontend Mentor</h3>
        <p>Feedback Board</p>
      </div>

      <div className="modal-buttons">
        {open === true ?
          <button onClick={() => closeDialog()}><GoBack /></button>
          :
          <button onClick={() => openDialog()}><Menu /></button>
        }
      </div>

      <dialog className="dialog-form" ref={modalRef} open={open} style={{ width: open ? "75%" : "0%" }}>
        <div className="dialog-content">
          <Categories />
          <Roadmap />
        </div>
      </dialog>
    </div>
  )
}