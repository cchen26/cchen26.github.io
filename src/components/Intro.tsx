import React from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";

interface Props {
  name: string;
  message: string;
  icons: Array<{ url: string; image: string }>;
}
const Intro = React.forwardRef<HTMLDivElement, Props>(
  ({ name, message, icons }, ref) => {
    return (
      <div
        id="intro"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("https://images.unsplash.com/photo-1587186311970-9ceba950f179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(80%)",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div className="container py-5">
          <div id="stars"></div>
          <Container className="text-center">
            <h1
              ref={ref}
              className="display-1"
              style={{ fontFamily: "Fira Code, monospace" }}
            >
              {name}
            </h1>
            <Typist>
              <div
                className="lead typist"
                style={{
                  fontFamily: "Ubuntu, sans-serif",
                  fontSize: "1.8rem",
                  filter: "brightness(150%)",
                }}
              >
                {message}
              </div>
            </Typist>
            <div className="p-5">
              {icons.map((icon, index) => (
                <a
                  key={`social-icon-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}
                >
                  <i className={`fab ${icon.image} fa-3x socialicons`} />
                </a>
              ))}
            </div>
          </Container>
        </div>
      </div>
    );
  }
);

export default Intro;
