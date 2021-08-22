import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { links } from "./contactLink";
import { Link } from "react-router-dom";

const Contact = ({ dark }) => {

    function sendEmail(e) {
      e.preventDefault();
      emailjs
        .sendForm(
          "gmail",
          "portfolio_email",
          e.target,
          "user_865X1ZAEouXHOoQkiCn5v"
        )
        .then(
          (result) => {
            console.log("Send successfully");
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset()
    }

  return (
    <div id={dark ? "contact_dark" : "contact"} className="scroll">
      <div id="emailMe">
        <h1 className="heading">Email me</h1>
        <form className="form" onSubmit={sendEmail}>
          {/* name */}
          <div className="form-control">
            <input
              required="True"
              type="text"
              name="from"
              placeholder="Your name"
              id="name"
              className="inputField"
            />
          </div>
          {/* email */}
          <div className="form-control">
            <input
              required="True"
              type="email"
              name="from_email"
              placeholder="Your Email"
              id="email"
              className="inputField"
            />
          </div>
          <div className="form-control">
            <textarea
              required="True"
              type="text"
              name="message"
              id="message"
              className="inputField"
              placeholder="Message"
            />
          </div>
          <div className="form-control">
            <input
              type="submit"
              id="submitForm"
              className="inputField"
              value="Send Message"
            />
          </div>
        </form>
      </div>
      <div id="moreContact">
        <h1 className="heading">Social Profiles</h1>
        {links.map((linkList) => {
          const { id, link, title, linkText } = linkList;
          return (
            <div key={id} className="socialInfoCont">
              <div className="titleCont">
                <h3 className="title">{title}</h3>
              </div>
              <p>
                <a href={link} className="socialLink">
                  {linkText}
                </a>
              </p>
            </div>
          );
        })}
      </div>
      <div className="backBtn">
        <Link id="back" to="/about">
          Back to about
        </Link>
      </div>
    </div>
  );
};

export default Contact;
