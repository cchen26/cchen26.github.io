import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../hooks/useScrollPosition";

interface Props {
  languages: { name: string; image: string }[];
  librariesFrameworks: { name: string; image: string }[];
  otherSkills: { name: string; image: string }[];
}

const Skills = React.forwardRef(
  ({ languages, librariesFrameworks, otherSkills }: Props, _cleref) => {
    const skillsTabRef = React.useRef(null);
    const [isScrolled, setIsScrolled] = React.useState(false);

    useScrollPosition(
      ({ currPos }) => {
        if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
      },
      [],
      skillsTabRef
    );
    return (
      <div ref={skillsTabRef} className="skills-bg m-0" id="skills">
        <div className="container py-5">
          <Container className="p-5 ">
            <h2
              ref={skillsTabRef}
              className="display-4 pb-5 text-center"
              style={{ fontFamily: "Ubuntu, sans-serif" }}
            >
              Skills
            </h2>
            <Tabs
              className="skills-tabs"
              defaultActiveKey="languages-skills"
              id="skills-tabs"
              fill
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              <Tab
                tabClassName="skills-tab lead"
                eventKey="languages-skills"
                title="Languages"
              >
                <Row className="pt-3 px-1">
                  <SkillsTab skills={languages} isScrolled={isScrolled} />
                </Row>
              </Tab>

              <Tab
                tabClassName="skills-tab lead"
                eventKey="libraries-skills"
                title="Libraries & Frameworks"
              >
                <Row className="pt-3 px-1">
                  <SkillsTab
                    skills={librariesFrameworks}
                    isScrolled={isScrolled}
                  />
                </Row>
              </Tab>

              <Tab
                tabClassName="skills-tab lead"
                eventKey="other-skills"
                title="Other Skills"
              >
                <Row className="pt-3 px-1">
                  <SkillsTab skills={otherSkills} isScrolled={isScrolled} />
                </Row>
              </Tab>
            </Tabs>
          </Container>
        </div>
      </div>
    );
  }
);

export default Skills;
