import React from "react";
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
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/skills">
          <Skill />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blogs">
          <Blog />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
