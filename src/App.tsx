import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { intro, skills, experienceData, repos } from "./assets/Configurable.js";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Project";

const Home = React.forwardRef<any, any>((_, ref) => {
  return (
    <>
      <Intro icons={intro.socials} ref={ref} />
      <Skills
        languages={skills.languages}
        librariesFrameworks={skills.librariesFrameworks}
        otherSkills={skills.otherSkills}
      />
      <Experience data={experienceData.jobs} />
      <Projects
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specific={repos.specificRepos}
      />
      <AboutMe />
    </>
  );
});

const App = () => {
  const titleRef = React.useRef<HTMLDivElement>(null);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home ref={titleRef} />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
