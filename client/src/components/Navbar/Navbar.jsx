import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/add">Add</Link>
          <Link to="/update">Update</Link>
        </li>
      </ul>
    </div>
  );
};
