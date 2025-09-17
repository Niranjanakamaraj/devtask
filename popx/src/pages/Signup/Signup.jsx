import React, { useState } from "react";
import MobileFrame from "../../Components/MobileFrame";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <MobileFrame>
      <div className="signup-container">
        <h1 className="signup-title">Create your<br/>PopX account</h1>
        <form className="signup-form" onSubmit={e => { e.preventDefault(); navigate("/profile"); }}>
          <div className="signup-form-group">
            <label className="signup-label">
              Full Name<span className="asterisk">*</span>
            </label>
            <input 
              name="name" 
              className="signup-input" 
              placeholder="Marry Doe" 
              value={form.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="signup-form-group">
            <label className="signup-label">
              Phone number<span className="asterisk">*</span>
            </label>
            <input 
              name="phone" 
              className="signup-input" 
              placeholder="Marry Doe" 
              value={form.phone} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="signup-form-group">
            <label className="signup-label">
              Email address<span className="asterisk">*</span>
            </label>
            <input 
              name="email" 
              className="signup-input" 
              placeholder="Marry Doe" 
              value={form.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="signup-form-group">
            <label className="signup-label">
              Password<span className="asterisk">*</span>
            </label>
            <input 
              name="password" 
              type="password" 
              className="signup-input" 
              placeholder="Marry Doe" 
              value={form.password} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="signup-form-group">
            <label className="signup-label">Company name</label>
            <input 
              name="company" 
              className="signup-input" 
              placeholder="Marry Doe" 
              value={form.company} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="signup-form-group signup-radio-group">
            <label className="signup-label1">
              Are you an Agency?
            </label>
            <div className="radio-options">
              <label className="signup-radio">
                <input 
                  type="radio" 
                  name="agency" 
                  value="yes" 
                  checked={form.agency === "yes"} 
                  onChange={handleChange} 
                />
                Yes
              </label>
              <label className="signup-radio">
                <input 
                  type="radio" 
                  name="agency" 
                  value="no" 
                  checked={form.agency === "no"} 
                  onChange={handleChange} 
                />
                No
              </label>
            </div>
          </div>
          
          <button className="signup-btn" type="submit">Create Account</button>
        </form>
      </div>
    </MobileFrame>
  );
}