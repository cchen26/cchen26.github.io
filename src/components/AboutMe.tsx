import React from "react";
import "/styles/AboutMe.scss";
import { Email } from "react-obfuscate-email";

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-section">
      <h2 className="section__title">About me</h2>
      <p className="about-me-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
      <div className="about-me-contacts">
        <a target="_blank" href="test@email.com">
          <Email email="test@email.com">Contact Me</Email>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
