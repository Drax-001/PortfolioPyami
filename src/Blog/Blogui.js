import React from "react";

const Blogui = ({ blogs }) => {
  return (
    <div id="blog_cont">
      {blogs.map((myBlogs) => {
        const { id, title, link, publishDate, status, readingTime } = myBlogs;
        return (
          <div className="blog_card" key={id}>
            <div className="blog_header">
              <h3 className="blog_title"> {title} </h3>
            </div>
            <div className="blog_body">
              <p className="status">
                Status: <span className="detail">{status}</span>
              </p>
              <p className="status">
                Publish date: <span className="detail">{publishDate}</span>
              </p>
              {readingTime !== "___" ? (
                <p className="status">
                  Reading time:{" "}
                  <span className="detail">{readingTime} min</span>
                </p>
              ) : (
                <p className="status">
                  Reading time: <span className="detail">{readingTime}</span>
                </p>
              )}
            </div>
            <div className="blog_footer">
              {link !== "" ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="published visiter"
                >
                  Read blog
                </a>
              ) : (
                <button disabled="True" className="not_published visiter">
                  Not yet published
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogui;
