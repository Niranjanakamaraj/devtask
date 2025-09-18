import React from "react";
// Importing the component-specific CSS to style the Landing page
import "./Landing.css";
import MobileFrame from "../../Components/MobileFrame";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <MobileFrame>
      <div className="landing-container">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-desc">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
        <button className="landing-btn primary" onClick={() => navigate("/signup")}>Create Account</button>
        <button className="landing-btn secondary" onClick={() => navigate("/login")}>Already Registered? Login</button>
      </div>
    </MobileFrame>
  );
}
