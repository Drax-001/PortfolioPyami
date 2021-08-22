import React from "react";
import './error.css'
import { Link } from "react-router-dom";

const Error = ({ dark }) => {
  return (
    <div id={dark ? "error_dark" : "error"}>
      <h1 className="heading">Oops!</h1>
      <p className="error_message">
        Looks like you landed on the wrong page
      </p>
      <Link to="/" id="back_btn">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
