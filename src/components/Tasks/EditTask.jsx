import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineUploadFile } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import "./AddTask.css";

const EditTask = () => {
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

  const handleFileSelect = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="task-modal">
      <div className="modal-header">
        <h2>Edit Task</h2>
        <a href="/dashboard" className="go-back">
          <IoClose className="close-icon" />
        </a>
      </div>
      <form className="task-form">
        <div className="form-layout">
          <div className="left-section">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter task title"
              />
            </div>
            <div className="form-group ">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" />
            </div>
            <div className="form-group description-group">
              <label htmlFor="description">Task Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Start writing here..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Edit Task
            </button>
          </div>
          <div className="right-section">
            <div className="form-group priority-group">
              <label>Priority</label>
              <div className="priority-options">
                <label className="priority-label">
                  <span className="dot extreme"></span>
                  <span className="priority-text">Extreme</span>
                  <input type="checkbox" name="priority" value="Extreme" />
                </label>
                <label className="priority-label">
                  <span className="dot moderate"></span>
                  <span className="priority-text">Moderate</span>
                  <input type="checkbox" name="priority" value="Moderate" />
                </label>
                <label className="priority-label">
                  <span className="dot low"></span>
                  <span className="priority-text">Low</span>
                  <input type="checkbox" name="priority" value="Low" />
                </label>
              </div>
            </div>

            <div className="form-group upload-group">
              <label>Upload Image</label>
              <div
                {...getRootProps({ className: "upload-container" })}
                className={`upload-container ${
                  isDragActive ? "drag-active" : ""
                }`}
              >
                <input {...getInputProps()} onChange={handleFileSelect} />
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
                    onClick={() =>
                      document.querySelector('input[type="file"]').click()
                    }
                  >
                    Browse
                  </button>
                </div>
              </div>
              {files.length > 0 && (
                <div className="file-preview">
                  <h4>Selected Files:</h4>
                  
                    {files.map((file, index) => (
                      <div key={index} className="file-item">
                        <div className="file-info">
                          {file.type.startsWith("image") ? (
                            <img
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                            />
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
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
