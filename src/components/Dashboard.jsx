import React from "react";
import { GrDocumentTime } from "react-icons/gr";

import { FaPlus } from "react-icons/fa6";
import "./Dashboard.css";

const MainContent = () => {
  return (
    <div className="dashboard">
      <h1>Welcome back, Pentakota Saivenkat!</h1>
      <div className="task-dashboard">
        <div className="left-dashboard">
          <div className="left-dashboard-header">
            <h3><GrDocumentTime />
            To-Do</h3>
            <button className="addtask-btn">
              <a href="/addtask"><FaPlus className="Faplus" /></a> Add Task
            </button>
          </div>

          <p>Task 1</p>
          <p>Task 2</p>
          <p>Task 3</p>
        </div>
        <div className="right-dashboard">
          <div className="task-status">
            <h2>Task Status</h2>

            <p>In Progress: 2</p>
            <p>Pending: 1</p>
          </div>
          <div className="task-completed">
            <h2>Completed Tasks</h2>

            <p>Task A</p>
            <p>Task B</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
