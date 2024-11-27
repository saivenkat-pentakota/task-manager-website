import React from "react";
import { FaPlus, FaCheckCircle, FaInfoCircle } from "react-icons/fa"; // Import icons
import "./MainContent.css"; // Add your custom styles

const MainContent = ({ userName, tasks, completedTasks }) => {
  return (
    <div className="main-content">
      <h1>Welcome back, {userName}!</h1>
      <div className="task-section">
        <div className="task-left">
          <button className="add-task-btn">
            <FaPlus className="icon" /> Add Task
          </button>
          <div className="tasks">
            {tasks.map((task, index) => (
              <div key={index} className="task-item">
                <FaInfoCircle className="icon" />
                <span>{task.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="task-right">
          <h3>Task Status</h3>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task.status === "completed" ? (
                  <FaCheckCircle className="icon success" />
                ) : (
                  <FaInfoCircle className="icon pending" />
                )}
                {task.title}
              </li>
            ))}
          </ul>
          <h3>Completed Tasks</h3>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                <FaCheckCircle className="icon success" />
                {task.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
