import React, { FC } from "react";
import "../styles/experience_list.scss";

type Props = {
  index: number;
  activeTabId: number;
  data: {
    company: string;
    position: string;
    period: string;
    details: string[];
  };
  onClick: (id: number) => void;
};

const ExperienceList: FC<Props> = (props) => {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
    <li key={props.index} className="section__Jobs-listCompany">
      <button
        className="section__Jobs-buttonCompany"
        onClick={Clicked}
        style={
          props.activeTabId === props.index
            ? { color: "#dca652" }
            : { color: "#8892b0" }
        }
      >
        {props.data.company}
      </button>
    </li>
  );
};

export default ExperienceList;
