import React from "react";
import { MdOutlineUploadFile } from "react-icons/md";
import "./AddTask.css";

const AddTask = () => {
  return (
    <div className="task-modal">
      <div className="modal-header">    
        <h2>Add New Task</h2>
        <a href="/dashboard" className="go-back">Go Back</a>
      </div>
      <form className="task-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="Enter task title" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" />
        </div>
        <div className="form-group priority-group">
          <label>Priority</label>
          <div className="priority-options">
            <label>
              <input type="checkbox" name="priority" value="Extreme" />
              <span className="extreme">Extreme</span>
            </label>
            <label>
              <input type="checkbox" name="priority" value="Moderate" />
              <span className="moderate">Moderate</span>
            </label>
            <label>
              <input type="checkbox" name="priority" value="Low" />
              <span className="low">Low</span>
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Task Description</label>
          <textarea id="description" name="description" placeholder="Start writing here..."></textarea>
        </div>
        <div className="form-group">
          <label>Upload Image</label>
          <div className="upload-container">
            <div className="upload-box">
                <MdOutlineUploadFile className="uploadfile-img" />
              <p>Drag & Drop files here <br /> or</p>
              <button type="button" className="browse-btn">Browse</button>
            </div>
          </div>
        </div>
        <button type="submit" className="submit-btn">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
