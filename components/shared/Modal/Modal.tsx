import React from "react";

export default function Modal() {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div style={{ backgroundColor: "white" }}>Helloo</div>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}
