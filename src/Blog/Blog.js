import React, { useState } from "react";
import "./blog.css";
import { blogs } from "./blogs";
import Blogui from "./Blogui";
import Search from "./Search";

const Blog = () => {
  const [searchBlog, setSeacrh] = useState("");
  const filterMyBlogs = blogs.filter((blog) =>
    blog.title
      .toLowerCase()
      .trim("")
      .includes(searchBlog.toLowerCase().trim(""))
  );

  return (
    <div id="blog" className="scroll">
      <Search search={setSeacrh} />
      <Blogui blogs={filterMyBlogs} />
    </div>
  );
};

export default Blog;
