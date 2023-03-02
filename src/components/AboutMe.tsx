import React from "react";
import "/styles/AboutMe.css";
import { Email } from "react-obfuscate-email";

const AboutMe: React.FC = () => {
  return (
    <section className="about-me-section" id="about-me">
      <h2 className="section__title">About me</h2>
      <p id="about-me-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
      <div id="about-me-contacts">
        <a target="_blank" href="test@email.com">
          <Email email="test@email.com">Contact Me</Email>
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
