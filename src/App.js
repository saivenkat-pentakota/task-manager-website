import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import Navbar from "./components/Navbar";
import Dashboard from './components/Dashboard';
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AddTask from "./components/Tasks/AddTask";
import EditTask from "./components/Tasks/EditTask";
import Profile from "./components/profile/Profile";
import MyTasks from "./components/Tasks/MyTasks";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="layout">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addtask" element={<AddTask />} />
            <Route path="/edittask" element={<EditTask />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mytasks" element={<MyTasks />} />
          </Routes>
          <Sidebar />
        </div>
      </div>
    </Router>
  );
};

export default App;
