import React from "react";
import MobileFrame from "../../Components/MobileFrame";
import "./Profile.css";

export default function Profile() {
  return (
    <MobileFrame>
      <div className="profile-container">
        <div className="profile-header">Account Settings</div>
        <div className="profile-card">
          <div className="profile-avatar-section">
            <div className="profile-avatar-wrapper">
              <img className="profile-avatar" src={require("./profile.png")} alt="Profile" />
              <span className="profile-camera-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#6C25FF"/>
                  <path d="M12 9.5C10.62 9.5 9.5 10.62 9.5 12C9.5 13.38 10.62 14.5 12 14.5C13.38 14.5 14.5 13.38 14.5 12C14.5 10.62 13.38 9.5 12 9.5ZM12 13.5C11.17 13.5 10.5 12.83 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.83 10.5 13.5 11.17 13.5 12C13.5 12.83 12.83 13.5 12 13.5ZM17 8.5H15.82L15.4 7.79C15.21 7.47 14.86 7.25 14.5 7.25H9.5C9.14 7.25 8.79 7.47 8.6 7.79L8.18 8.5H7C6.45 8.5 6 8.95 6 9.5V16C6 16.55 6.45 17 7 17H17C17.55 17 18 16.55 18 16V9.5C18 8.95 17.55 8.5 17 8.5ZM17 16H7V9.5H9.24L9.66 8.79C9.75 8.63 9.91 8.5 10.09 8.5H13.91C14.09 8.5 14.25 8.63 14.34 8.79L14.76 9.5H17V16Z" fill="white"/>
                </svg>
              </span>
            </div>
            <div className="profile-info">
              <div className="profile-name">Marry Doe</div>
              <div className="profile-email">Marry@Gmail.Com</div>
            </div>
          </div>
          <div className="profile-desc">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </div>
        </div>
        <div className="dashed-line"></div>
      </div>
    </MobileFrame>
  );
}