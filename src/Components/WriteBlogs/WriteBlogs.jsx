import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { LoginContext } from "../../Context/LoginContext";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./WriteBlogs.css";

const WriteBlogs = () => {
  const value = useContext(LoginContext);
  const [blog, setBlog] = useState({ title: "", author: "", body: "" });
  const [authorization, setAuthorization] = useState(value.accessToken);

  const url = "https://node-js-app-with-auth.herokuapp.com/api/blogs";
  //   const url = "http://localhost:5000/api/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `JWT ${authorization}`,
    },
    body: JSON.stringify(blog),
  };

  function handleSubmit(e) {
    e.preventDefault();

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  const handleChange = (e) => {
    setBlog((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      {console.log(value)}
      <NavigationBar />

      <div className="blog-container">
        <h2 id="blog-text">Write new Blog</h2>
        <form id="blog-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Blog title"
            name="title"
            id="blog-title"
            className="input-field"
            value={blog.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Author"
            name="author"
            id="author"
            className="input-field"
            value={blog.author}
            onChange={handleChange}
            required
          />
          <textarea
            type="text"
            placeholder="Write blog here."
            name="body"
            id="blog-body"
            className="text-area"
            value={blog.body}
            onChange={handleChange}
            required
          />
          <br />

          <button type="submit" className="blog-submit-btn btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default WriteBlogs;
