import React from "react";
import "./MobileFrame.css";

export default function MobileFrame({ children }) {
  return (
    <div className="outer">
      <div className="phone">{children}</div>
    </div>
  );
}