import React from "react";
import "../styles/navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div id="navigation">
      <nav>
        <a
          href="#intro"
          aria-label="Intro"
          data-tooltip
          data-position="right"
          data-tooltip-content="Intro"
        >
          <i className="fas fa-home"></i>
        </a>
        <a
          href="#skills"
          aria-label="Skills"
          data-tooltip
          data-position="right"
          data-tooltip-content="Skills"
        >
          <i className="fas fa-paint-brush"></i>
        </a>
        <a
          href="#experience"
          aria-label="Experience"
          data-tooltip
          data-position="right"
          data-tooltip-content="Experience"
        >
          <i className="fas fa-briefcase"></i>
        </a>
        <a
          href="#projects"
          aria-label="Projects"
          data-tooltip
          data-position="right"
          data-tooltip-content="Projects"
        >
          <i className="fas fa-project-diagram"></i>
        </a>
        <a
          href="#about-me"
          aria-label="About Me"
          data-tooltip
          data-position="right"
          data-tooltip-content="About Me"
        >
          <i className="fas fa-info-circle"></i>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
