import { useState, useEffect } from "react";
import BlogList from "./BlogList.js";

const Home = () => {
  const [blogs, setBlogs] = useState();

  const [name, setName] = useState("Shuvo ji the boss");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="home">
      {/* <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} /> */}
    </div>
  );
};

export default Home;
