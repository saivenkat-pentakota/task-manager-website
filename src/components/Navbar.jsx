import React, { useState, useEffect } from "react";
import { FaBell, FaUserCircle, FaSearch,FaRegCalendarAlt } from "react-icons/fa"; 
import "./Navbar.css";

const Navbar = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="navbar">
      <div className="logo">Company Logo</div>
      <div className="search-bar">
        <input type="text" placeholder="Search your task here..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="navbar-icons">
        <FaBell className="icon" title="Notifications" />
        <FaUserCircle className="icon" title="Profile" />
        <FaRegCalendarAlt className="icon" title="Profile"  />
        <div className="date-time" >
          <div className="date">{formattedDate}</div>
          <div className="time">{formattedTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
