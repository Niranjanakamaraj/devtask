import React from "react";
import MobileFrame from "../../Components/MobileFrame";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  return (
    <MobileFrame>
      <div className="login-container">
        <h1 className="login-title">Signin to your<br/>PopX account</h1>
        <p className="login-desc">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
        
        <div className="login-form-group">
          <label className="login-label">Email Address</label>
          <input type="email" className="login-input" placeholder="Enter email address" />
        </div>
        
        <div className="login-form-group">
          <label className="login-label">Password</label>
          <input type="password" className="login-input" placeholder="Enter password" />
        </div>
        
        <button className="login-btn" onClick={() => navigate("/profile")}>Login</button>
      </div>
    </MobileFrame>
  );
}