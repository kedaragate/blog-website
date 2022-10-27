import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Home.css";

export default function Home(props) {
  const [blogs, setBlogs] = useState([]);
  const [areWeGettingBlogs, setAreWeGettingBlogs] = useState(false);

  const url = "https://node-js-app-with-auth.herokuapp.com/api/blogs";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(() => data);
        setAreWeGettingBlogs(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavigationBar />
      {areWeGettingBlogs ? (
        <div className="blogs-container">
          {blogs.map((blog) => {
            return (
              <ul id={blog.id} key={blog.id} className="blog">
                <li>
                  <h3>{blog.title}</h3>
                </li>
                <li>
                  <h5>{blog.author}</h5>
                </li>
                <li>
                  <p>{blog.body}</p>
                </li>
              </ul>
            );
          })}
        </div>
      ) : (
        <h2>Please wait while we are getting all the Blogs.</h2>
      )}
    </>
  );
}
