import React from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Themes from "./components/Themes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Themes />
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
