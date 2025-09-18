// MobileFrame.jsx
import React from "react";
import "./MobileFrame.css";

// A reusable wrapper that displays its children
// inside a centered mobile-phone–sized frame
export default function MobileFrame({ children }) {
  return (
    <div className="outer">
      {/* Inner container that mimics a phone screen */}
      <div className="phone">{children}</div>
    </div>
  );
}
