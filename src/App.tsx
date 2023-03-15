import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Project";
//assets
import aboutme from "./assets/aboutme.json";
import repos from "./assets/repos.json";
import skills from "./assets/skills.json";
import intro from "./assets/intro.json";
import experience from "./assets/experience.json";

const Home = React.forwardRef<any, any>((props, ref) => {
  return (
    <>
      <Intro
        name={`${intro.firstName} ${intro.lastName}`}
        message={intro.message}
        icons={intro.icons}
        ref={ref}
      />
      <Skills
        heading={skills.heading}
        languages={skills.languages}
        librariesFrameworks={skills.librariesFrameworks}
        otherSkills={skills.otherSkills}
      />
      <Experience
        heading={experience.heading}
        experienceList={experience.data}
      />
      <Projects
        heading={repos.heading}
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specific={repos.specificRepos}
      />
      <AboutMe
        heading={aboutme.heading}
        message={aboutme.message}
        email={aboutme.email}
      />
    </>
  );
});

const App = () => {
  const titleRef = React.useRef<HTMLDivElement>(null);
  return (
    // <BrowserRouter basename={`${process.env["PUBLIC_URL"]}/`}>
    <BrowserRouter basename="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home ref={titleRef} />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
