import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 - Created by dxtaner</p>
      <p>
        View the source code on{" "}
        <a
          href="https://github.com/dxtaner"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>
        {" | "}
        Connect on{" "}
        <a
          href="https://www.linkedin.com/in/tanerozer16/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
