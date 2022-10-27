import { useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Register.css";

export default function Register() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const url = "https://node-js-app-with-auth.herokuapp.com/api/register";
  //   const url = "http://localhost:5000/api/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  };

  function handleSubmit(e) {
    e.preventDefault();

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  const handleChange = (e) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <NavigationBar />
      <div className="form-container">
        <h2 id="register-text">Register for a new account.</h2>
        <form id="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            id="firstName"
            className="input-field"
            value={userDetails.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            className="input-field"
            value={userDetails.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Email Id"
            name="emailId"
            id="emailId-register"
            className="input-field"
            value={userDetails.emailId}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password-register"
            className="input-field"
            value={userDetails.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            id="confirm-password"
            className="input-field"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <button type="submit" className="register-btn btn">
            Register
          </button>
        </form>
      </div>
      {confirmPassword === userDetails.password ? null : (
        <p id="password-dont-match">Password do not match.</p>
      )}
    </>
  );
}
