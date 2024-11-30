import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineUploadFile } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./AddTask.css";

const AddTask = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true, 
    noClick: true, 
    noDrag: false, 
  });

  // Handle file selection from the file explorer
  const handleFileSelect = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // Remove file from the preview list
  const handleRemoveFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="task-modal">
      <div className="modal-header">
        <h2>Edit Task</h2>
        <a href="/dashboard" className="go-back">
          <IoMdArrowRoundBack className="goback-icon" />
          Go Back
        </a>
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
          <div
            {...getRootProps({ className: "upload-container" })}
            className={`upload-container ${isDragActive ? "drag-active" : ""}`}
          >
            <input
              {...getInputProps()}
              onChange={handleFileSelect} 
            />
            <div className="upload-box">
              <MdOutlineUploadFile className="uploadfile-img" />
              <p>
                {isDragActive
                  ? "Drop the files here..."
                  : "Drag & Drop files here or"}
              </p>
              <button
                type="button"
                className="browse-btn"
                onClick={() => document.querySelector('input[type="file"]').click()}
              >
                Browse
              </button>
            </div>
          </div>
          {files.length > 0 && (
            <div className="file-preview">
              <h4>Selected Files:</h4>
              <ul>
                {files.map((file, index) => (
                  <li key={index} className="file-item">
                    <div className="file-info">
                      {file.type.startsWith("image") ? (
                        <img src={URL.createObjectURL(file)} alt={file.name} />
                      ) : (
                        <span>{file.name}</span>
                      )}
                    </div>
                    <button
                      type="button"
                      className="remove-file-btn"
                      onClick={() => handleRemoveFile(index)}
                    >
                 Delete     
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button type="submit" className="submit-btn">Update Task</button>
      </form>
    </div>
  );
};

export default AddTask;
