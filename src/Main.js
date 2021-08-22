import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Skill from "./Skills/Skill";
import Projects from "./Projects/Projects";
import Error from "./Error/Error";
import Nav from "./Navbar/Nav";
import Blog from "./Blog/Blog";
import Contact from "./Home/Contact/Contact";
import About from "./Home/About/About";

const Main = () => {
  const [darkTheme, setDarkTheme] = React.useState(true);

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <Router>
        <Nav dark={darkTheme} setDark={setDarkTheme} />
        <Switch>
          <Route exact path="/">
            <Home dark={darkTheme} />
          </Route>
          <Route path="/skills">
            <Skill dark={darkTheme} />
          </Route>
          <Route path="/about">
            <About dark={darkTheme} />
          </Route>
          <Route path="/contact">
            <Contact dark={darkTheme} />
          </Route>
          <Route path="/projects">
            <Projects dark={darkTheme} />
          </Route>
          <Route path="/blogs">
            <Blog dark={darkTheme} />
          </Route>
          <Route path="*">
            <Error dark={darkTheme} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
