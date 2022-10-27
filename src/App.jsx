import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import WriteBlogs from "./Components/WriteBlogs/WriteBlogs";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { LoginContext } from "./Context/LoginContext";

function App() {
  const [islogin, setIsLogin] = useState(false);
  const [userDetails, setUserDetails] = useState({ emailId: "", password: "" });

  const url = "https://node-js-app-with-auth.herokuapp.com/api/login";
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

  return (
    <BrowserRouter>
      <LoginContext.Provider
        value={{ userDetails, handleSubmit, handleChange }}
      >
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/ContactUs" element={<ContactUs />} />
            <Route exact path="/WriteBlogs" element={<WriteBlogs />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
          </Routes>
        </div>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
