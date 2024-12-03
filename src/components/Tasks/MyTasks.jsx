import React, { useState } from "react";
import "./MyTasks.css";

const TaskPage = () => {
  const [selectedTask, setSelectedTask] = useState({
    title: "Submit Documents",
    priority: "Extreme",
    status: "Not Started",
    createdOn: "20/08/2023",
    objective: "To submit required documents for something important",
    description:
      "Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.",
    notes: [
      "Ensure that the documents are authentic and up-to-date.",
      "Maintain confidentiality and security of sensitive information during the submission process.",
      "If there are specific guidelines or deadlines for submission, adhere to them diligently.",
    ],
    deadline: "End of Day",
    image: "https://via.placeholder.com/150",
  });

  const tasks = [
    {
      id: 1,
      title: "Submit Documents",
      priority: "Extreme",
      status: "Not Started",
      createdOn: "20/08/2023",
      summary: "Make sure to submit all the necessary documents...",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Complete assignments",
      priority: "Moderate",
      status: "In Progress",
      createdOn: "20/06/2023",
      summary: "The assignments must be completed to pass final year...",
      image: "https://via.placeholder.com/100",
    },
  ];

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="task-page-container">
      <div className="task-list">
        <h3>My Tasks</h3>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="task-card"
            onClick={() => handleTaskClick(task)}
          >
            <img src={task.image} alt={task.title} />
            <div className="task-info">
              <h4>{task.title}</h4>
              <p>{task.summary}</p>
              <div className="task-meta">
                <span>Priority: {task.priority}</span>
                <span>Status: {task.status}</span>
                <span>Created on: {task.createdOn}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="task-detail">
        <img src={selectedTask.image} alt={selectedTask.title} />
        <h2>{selectedTask.title}</h2>
        <p><strong>Priority:</strong> {selectedTask.priority}</p>
        <p><strong>Status:</strong> {selectedTask.status}</p>
        <p><strong>Created on:</strong> {selectedTask.createdOn}</p>
        <p><strong>Objective:</strong> {selectedTask.objective}</p>
        <p><strong>Task Description:</strong> {selectedTask.description}</p>
        <p><strong>Additional Notes:</strong></p>
        <ul>
          {selectedTask.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
        <p><strong>Deadline for Submission:</strong> {selectedTask.deadline}</p>
        <div className="task-actions">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
