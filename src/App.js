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

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Dashboard/>
        <div className="layout">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path = "/addtask"element = {<AddTask/>}/>
            <Route path = "/edittask"element = {<EditTask/>}/>
          </Routes>
          <Sidebar/>
        </div>
      </div>
    </Router>
  );
};

export default App;
