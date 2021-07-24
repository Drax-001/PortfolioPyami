import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="scroll">
      <h1 className="heading">Contact</h1>
      <div id="info">
        <table>
          <tbody>
            <tr>
              <td>E-mail</td>
              <td>1pyami@gmail.com</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>9981719665</td>
            </tr>
            <tr>
              <td>Github</td>
              <td className="social_link underline">
                <a href="https://github.com/Pyami?tab=profile">
                  Visit me on github
                </a>
              </td>
            </tr>
            <tr>
              <td>linkedin</td>
              <td className="social_link underline">
                {" "}
                <a href="https://www.linkedin.com/in/pyami-pra-b12132213/">
                  Vsit me on linkedin
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>Medium</td>
              <td className="social_link underline">
                {" "}
                <a href="https://pyami.medium.com/">Read my blogs</a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
