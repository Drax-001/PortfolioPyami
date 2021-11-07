import React, { useEffect, useState } from "react";
import "./home.css";
import Image from "./Pyami.jpg";
import { link } from "./links";
import { Link } from "react-router-dom";

const Home = ({ dark }) => {
  const info = "Front End Developer";

  const [links, setLinks] = useState(link);

  useEffect(() => {
    setLinks(link);
  }, []);

  return (
    <React.Fragment>
      <div id="home">
        <div id="right_sidebar">
          <div id="img_cont">
            <img src={Image} id={dark ? "pyami_dark" : "pyami"} alt="Pyami" />
          </div>
          <div id="anotherSec">
            <h1 id={dark ? "what_dark" : "what"} className="what">
              {info}
            </h1>
            <p id={dark ? "intro_dark" : "intro"} className="intro">
              Hey there! I am an enthusiastic developer. I have been coding for
              years now and I have a handful of tools to work with. Regardless
              of my skills I also like to get envolved in various different
              activity like sports, games, reading, etc.
              <span id="fit">
                <Link to="/about" id="about" className="underline">
                  Know more about me....
                </Link>
              </span>
            </p>
            <div
              className="social_link"
              id={dark ? "social_link_dark" : "social_link"}
            >
              {links.map((socialLink) => {
                const { id, href, icon } = socialLink;
                return (
                  <a key={id} target="_blank" rel="noreferrer" href={href}>
                    <span className={icon}></span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
