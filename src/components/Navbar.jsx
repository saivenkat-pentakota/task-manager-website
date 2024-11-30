import React, { useState, useEffect, useRef } from "react";
import { FaBell, FaUserCircle, FaSearch, FaRegCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Navbar.css";

const Navbar = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle clicks outside the calendar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

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
        <FaBell className="icon" title="Notifications" aria-label="Notifications" />
        <FaUserCircle className="icon" title="Profile" aria-label="Profile" />
        <div className="calendar-container" ref={calendarRef}>
          <FaRegCalendarAlt
            className="icon"
            title="Calendar"
            aria-label="Open Calendar"
            onClick={toggleCalendar}
            tabIndex={0}
          />
          {showCalendar && (
            <div className="calendar-popup">
              <Calendar value={new Date()} />
            </div>
          )}
        </div>
        <div className="date-time">
          <div className="date">{formattedDate}</div>
          <div className="time">{formattedTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
