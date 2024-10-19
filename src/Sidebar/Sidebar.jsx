import React, { useState } from "react";
import {
  FaHome,
  FaTasks,
  FaComments,
  FaChartLine,
  FaRegListAlt,
  FaProjectDiagram,
  FaRProject,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Sidebar.css";
import { FaDiagramProject } from "react-icons/fa6";

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <aside className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div className="header-container">
        <button className="toggle-button" onClick={toggleSidebar}>
          {isSidebarCollapsed ? "☰" : "×"} {/* Toggle icon */}
        </button>
        <div className="sidebar-logo">My App</div>
      </div>

      <ul className="sidebar-nav">
        <li className="sidebar-item sidebar-link">
            <FaHome className="sidebar-icon " /> <span>Home</span>
        </li>
        <li className="sidebar-item sidebar-link">
            <FaRegListAlt className="sidebar-icon" /> <span>To Do</span>
        </li>
        <li className="sidebar-item sidebar-link">
            <FaComments className="sidebar-icon" /> <span>Posts</span>
        </li>
        <li className="sidebar-item sidebar-link">
            <FaDiagramProject className="sidebar-icon" />{" "}
            <span>My Projects</span>
        </li>
        <li className="sidebar-item sidebar-link">
            <FaChartLine className="sidebar-icon" /> <span>Analytics</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar; // Ensure you are using 'export default' here
