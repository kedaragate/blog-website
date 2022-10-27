import React from "react";
import { useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Login.css";
import Welcome from "../Welocme/Welcome";
import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

export default function Login() {
  const value = useContext(LoginContext);
  return (
    <>
      <NavigationBar />
      <div className="form-container">
        <h2 id="login-text">Login to your account</h2>
        <form id="login-form" onSubmit={value.handleSubmit}>
          <input
            type="text"
            placeholder="Email Id"
            name="emailId"
            id="emailId-login"
            className="input-field"
            value={value.userLoginDetails.emailId}
            onChange={value.handleChange}
            required
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password-login"
            className="input-field"
            value={value.userLoginDetails.password}
            onChange={value.handleChange}
            required
          />
          <button type="submit" className="login-btn btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
