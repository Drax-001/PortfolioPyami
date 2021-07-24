import React, { useEffect, useState } from "react";
import "./home.css";
import Image from "./Pyami.jpg";
import About from "./About/About";
import Experience from "./Experiecne/Experience";
import Contact from "./Contact/Contact";
import { link } from "./links";

const Home = () => {
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
            <img src={Image} id="pyami" alt="Pyami" />
          </div>
          <h1 id="what"> {info} </h1>
          <h2 id="email">1pyami@gamil.com</h2>
          <div id="social-link">
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
      <div id="more">
        <div id="my_info">
          <About />
          {/* <Experience /> */}
          <Contact />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
