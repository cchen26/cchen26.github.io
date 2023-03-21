import React from "react";
import "../styles/footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="section">
      <div id="footer-content"></div>
      <p>
        Website was made with &nbsp;
        <i className="fab fa-react"></i>
      </p>
    </footer>
  );
};

export default Footer;
