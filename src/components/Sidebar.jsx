import React from "react";
import { FaTachometerAlt, FaTasks, FaCogs, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa"; 
import "./Sidebar.css"; 

const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
      <div className="user-profile">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-img" />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <div className="menu">
        <div className="menu-item">
          <FaTachometerAlt className="icon" />
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <FaTasks className="icon" />
          <span>My Tasks</span>
        </div>
        <div className="menu-item">
          <FaCogs className="icon" />
          <span>Task Categories</span>
        </div>
        <div className="menu-item">
          <FaQuestionCircle className="icon" />
          <span>Help</span>
        </div>
        <div className="menu-item">
          <FaSignOutAlt className="icon" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
