import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceList from "./ExperienceList";
import ExperienceContent from "./ExperienceContent";
import "../styles/experience.scss";

interface ExperienceDataProps {
  data: {
    expData: {
      company: string;
      position: string;
      period: string;
      details: string[];
    };
  }[];
}

const Experience: React.FC<ExperienceDataProps> = (props) => {
  const [activeTabId, setActiveTabId] = useState(0);

  const btnClick = (id: number) => {
    setActiveTabId(id);
  };

  return (
    <div id="experience" className="experience-bg m-0">
      <Container className="section__Jobs-container">
        <div className="container py-5">
          <h2
            className="display-4 mb-5 text-center"
            style={{ fontFamily: "Ubuntu, sans-serif" }}
          >
            Experience
          </h2>
          <Row>
            <Col sm="3">
              <div className="section__Jobs-styledTab">
                <ul className="section__Jobs-styledTabList">
                  {props.data.map((job, index) => (
                    <ExperienceList
                      key={index}
                      onClick={btnClick}
                      data={job}
                      index={index}
                      activeTabId={activeTabId}
                    />
                  ))}
                </ul>
              </div>
            </Col>
            <Col sm="9">
              {props.data.map((job, index) => (
                <ExperienceContent
                  data={job}
                  key={index}
                  index={index}
                  activeTabId={activeTabId}
                />
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
