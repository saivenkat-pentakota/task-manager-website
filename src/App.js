import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="layout">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
