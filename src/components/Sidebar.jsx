import React from "react";
import { FaTasks, FaCogs, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-profile">
        <img src="" alt="Profile" className="profile-img" />
        <h3>Pentakota Saivenkat</h3>
        <p>saivenkatpentakota@gmail.com</p>
      </div>
      <div className="menu">
        <div className="menu-item">
          <MdDashboard className="sidebar-icon" />
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <FaTasks className="sidebar-icon" />
          <span>My Tasks</span>
        </div>
        <div className="menu-item">
          <FaCogs className="sidebar-icon" />
          <span>Task Categories</span>
        </div>
        <div className="menu-item">
          <IoMdSettings className="sidebar-icon" />
          <span>Settings</span>
        </div>
        <div className="menu-item">
          <FaQuestionCircle className="sidebar-icon" />
          <span>Help</span>
        </div>
        <div className="menu-item logout">
          <FaSignOutAlt className="sidebar-icon" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
