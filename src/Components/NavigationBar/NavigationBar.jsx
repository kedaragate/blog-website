import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationBar.css";

export default function NavigationBar(props) {
  return (
    <div className="navigation-bar">
      <h2 id="logo">Blog-Vlog</h2>
      <ul className="menu">
        <li className="menu-item">
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/AboutUs">About Us</NavLink>
        </li>
        <li className={"menu-item"}>
          <NavLink to="/ContactUs">Contact Us</NavLink>
        </li>
        <li className={"menu-item"}>
          <NavLink to="/WriteBlogs">Write Blogs</NavLink>
        </li>
      </ul>
      <div className="navigation-bar-btn-container">
        <NavLink to="/Login">
          <button className="login-button btn">Login</button>
        </NavLink>

        <NavLink to="/Register">
          <button className="register-button btn">Register </button>
        </NavLink>
      </div>
    </div>
  );
}
