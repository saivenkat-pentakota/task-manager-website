import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-info-container">
      <div className="header">
        <h2>Profile Information</h2>
        <a href="/dashboard" className="go-back">Go Back</a>
      </div>
      <div className="profile-section">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="profile-picture"
        />
        <div className="user-details">
          <h3>Pentakota Saivenkat</h3>
          <p>saivenkatpentakota@gmail.com</p>
        </div>
      </div>
      <form className="info-form">
        <div className="form-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="form-row">
          <input type="tel" placeholder="Contact Number" />
          <input type="text" placeholder="Position" />
        </div>
        <div className="button-row">
          <button type="button" className="update-btn">Update Info</button>
          <button type="button" className="change-btn">Change Password</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
