import React from "react";

type AboutMeProps = {
  heading: string;
  message: string;
  email: string;
};

const AboutMe: React.FC<AboutMeProps> = ({ heading, message, email }) => {
  return (
    <div id="about-me" className="m-0">
      <div className="container py-5">
        <div className="container row">
          <div className="col-5 d-none d-lg-block align-self-center"></div>
          <div className="col-lg-12">
            <h2
              className="display-4 mb-5 text-center"
              style={{ fontFamily: "Ubuntu, sans-serif" }}
            >
              {heading}
            </h2>
            <p className="lead text-center">{message}</p>
            <div style={{ textAlign: "center" }}>
              <a
                href={`mailto:${email}`}
                className="btn btn-outline-dark btn-lg"
                aria-label="Contact"
              >
                <i className="fas fa-envelope"></i>
                <span>&nbsp; Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
