import React from "react";
import "../styles/experience_content.scss";

interface Props {
  data: {
    company: string;
    position: string;
    period: string;
    details: string[];
  };
  index: number;
  activeTabId: number;
}

const ExperienceContent: React.FC<Props> = (props) => {
  let data = props.data;

  return (
    <div
      key={props.index}
      className="section__Jobs-styledContent"
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <h4>{data.position}</h4>
      <h5>{data.period}</h5>
      <ul>
        {data.details.map((detail) => (
          <li className="section__Jobs-detail">{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceContent;
