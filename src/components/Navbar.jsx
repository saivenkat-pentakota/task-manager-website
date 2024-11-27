import React from "react";
import { FaBell, FaUserCircle, FaClock } from "react-icons/fa";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Your Company</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-icons">
        <FaBell className="icon" title="Notifications" />
        <FaUserCircle className="icon" title="Profile" />
        <FaClock className="icon" title="Date & Time" />
        <div className="date-time">Nov 27, 2024 | 11:00 AM</div>
      </div>
    </div>
  );
};

export default Navbar;
