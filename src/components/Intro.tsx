import React from "react";

const Intro: React.FC = () => {
  return (
    <div id="intro">
      <div id="content">
        <div id="title">
          <h1 id="name">Chao Chen</h1>
          <p id="description">Junior Software Engineer</p>
        </div>
        <div id="links">
          <a
            target="_blank"
            href="https://github.com/cchen26"
            aria-label="Github"
            data-tooltip
            data-tooltip-position="bottom"
            data-tooltip-content="Github"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/chaochen26/"
            aria-label="LinkedIn"
            data-tooltip
            data-tooltip-position="bottom"
            data-tooltip-content="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
