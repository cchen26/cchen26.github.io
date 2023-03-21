import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div id="about-me" className="about-me-bg m-0">
      <div className="container py-5">
        <div className="container row">
          <div className="col-5 d-none d-lg-block align-self-center"></div>
          <div className="col-lg-12">
            <h2
              className="display-4 mb-5 text-center"
              style={{ fontFamily: "Ubuntu, sans-serif" }}
            >
              About Me
            </h2>
            <p
              className="lead text-center"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              I am an aspiring Junior Software Engineer with a passion for
              learning and experimenting with new technologies. I have a
              preference towards frontend frameworks, especially React, but I am
              open to any opportunities.
            </p>
            <div style={{ textAlign: "center" }}>
              <a
                href={`mailto:chaochen234@gmail.com`}
                className="btn btn-outline-dark btn-lg"
                aria-label="Contact"
              >
                <i className="fas fa-envelope" style={{ color: "white" }}></i>
                <span style={{ color: "white" }}>&nbsp; Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
