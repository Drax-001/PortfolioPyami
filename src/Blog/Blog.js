import React, { useEffect, useState } from "react";
import "./blog.css";

let url =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pyami";

export default function Blog({ dark }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status < 299) {
          setLoading(false);
          return res.json();
        } else {
          setLoading(false);
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        setData(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading.....</h1>
      </div>
    );
  } else {
    return (
      <>
        {data && (
          <>
            {" "}
            {dark ? (
              <div id="blog_dark">
                {data.map((list) => {
                  const { title, guid, thumbnail } = list;
                  return (
                    <div className="blog_card" key={title}>
                      <img className="imageCont" src={thumbnail} alt={title} />
                      <div className="blog_content">
                        <h2 className="blog_title">
                          <a href={guid} target="_blank" rel="noreferrer">
                            {title}
                          </a>
                        </h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div id="blog">
                {data.map((list) => {
                  const { title, guid, thumbnail } = list;
                  return (
                    <div className="blog_card" key={title}>
                      <img className="imageCont" src={thumbnail} alt={title} />
                      <div className="blog_content">
                        <h2 className="blog_title"> {title} </h2>
                        <p className="blog_text">
                          {title}
                          <a
                            href={guid}
                            rel="noreferrer"
                            target="_blank"
                            className="read"
                          >
                            Read more
                          </a>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}{" "}
          </>
        )}
      </>
    );
  }
}
