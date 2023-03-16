import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/tasks">
              Task List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tasks/new">
              Create Task
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
